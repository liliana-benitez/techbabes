import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
const printfulApiKey = process.env.PRINTFUL_API_KEY!

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get("stripe-signature")

    if (!signature) {
      return NextResponse.json({ error: "No signature found" }, { status: 400 })
    }

    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    console.log("Received webhook event type:", event.type)

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent

      console.log("Processing payment intent:", paymentIntent.id)
      console.log("Payment Intent metadata:", paymentIntent.metadata)
      console.log("Payment Intent shipping:", paymentIntent.shipping)

      const fullPaymentIntent = await stripe.paymentIntents.retrieve(
        paymentIntent.id
      )
      console.log(
        "🤑 Full Payment Intent metadata:",
        fullPaymentIntent.metadata
      )

      const cartItems = JSON.parse(fullPaymentIntent.metadata.cartItems || "[]")

      if (cartItems.length === 0) {
        console.log("No cart items found in payment intent")
        return NextResponse.json({ received: true })
      }

      console.log("🛒 Cart items found:", cartItems)

      const printfulOrder = await createPrintfulOrder(
        fullPaymentIntent,
        cartItems
      )

      console.log("📦 Printful order created:", printfulOrder)

      // Shipping cost in dollars for the confirmation email
      const shippingCostInCents = parseInt(
        fullPaymentIntent.metadata.shippingCost ?? "0"
      )
      const shippingCostDollars = shippingCostInCents / 100
      const subtotalDollars =
        (fullPaymentIntent.amount - shippingCostInCents) / 100
      const totalDollars = fullPaymentIntent.amount / 100

      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: fullPaymentIntent.metadata.customerName,
          customerEmail: fullPaymentIntent.metadata.customerEmail,
          orderNumber: `#TT-${printfulOrder.result?.id ?? Date.now()}`,
          orderDate: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }),
          items: cartItems.map((item) => ({
            name: item.id,
            quantity: item.quantity,
            price: item.price / 100
          })),
          subtotal: subtotalDollars,
          shipping: shippingCostDollars,
          total: totalDollars,
          shippingAddress: {
            street: fullPaymentIntent.shipping?.address?.line1 ?? "",
            city: fullPaymentIntent.shipping?.address?.city ?? "",
            state: fullPaymentIntent.shipping?.address?.state ?? "",
            zip: fullPaymentIntent.shipping?.address?.postal_code ?? ""
          }
        })
      })

      console.log("💌 confirmation email sent")
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    )
  }
}

interface CartItem {
  id: string
  quantity: number
  price: number
  printfulVariantId: string
}

async function createPrintfulOrder(
  paymentIntent: Stripe.PaymentIntent,
  cartItems: CartItem[]
) {
  const shippingDetails = paymentIntent.shipping

  if (!shippingDetails?.address) {
    throw new Error("No shipping address found")
  }

  const printfulItems = cartItems.map((item) => ({
    sync_variant_id: parseInt(item.printfulVariantId),
    quantity: item.quantity
  }))

  // Pull shipping cost and rate from PaymentIntent metadata
  const shippingCostInCents = parseInt(
    paymentIntent.metadata.shippingCost ?? "0"
  )
  const shippingCostDollars = (shippingCostInCents / 100).toFixed(2)
  const subtotalDollars = (
    (paymentIntent.amount - shippingCostInCents) /
    100
  ).toFixed(2)

  const orderData = {
    recipient: {
      name: shippingDetails.name || paymentIntent.metadata.customerName || "",
      address1: shippingDetails.address.line1 || "",
      address2: shippingDetails.address.line2 || "",
      city: shippingDetails.address.city || "",
      state_code: shippingDetails.address.state || "",
      country_code: shippingDetails.address.country || "",
      zip: shippingDetails.address.postal_code || "",
      email:
        paymentIntent.metadata.customerEmail ||
        paymentIntent.receipt_email ||
        "",
      phone: shippingDetails.phone || paymentIntent.metadata.customerPhone || ""
    },
    items: printfulItems,
    retail_costs: {
      currency: paymentIntent.currency.toUpperCase(),
      subtotal: subtotalDollars,
      shipping: shippingCostDollars,
      tax: "0.00"
    },
    confirm: false // Change to true in prod
  }

  console.log("Sending order to Printful:", JSON.stringify(orderData, null, 2))

  const response = await fetch("https://api.printful.com/orders", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${printfulApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })

  if (!response.ok) {
    const errorData = await response.json()
    console.error("Printful API error:", errorData)
    throw new Error(`Printful API error: ${response.status}`)
  }

  const result = await response.json()
  return result
}
