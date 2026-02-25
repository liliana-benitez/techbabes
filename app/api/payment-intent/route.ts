import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      amount,
      cartItems,
      customerEmail,
      customerName,
      customerPhone,
      shippingAddress1,
      shippingCity,
      shippingState,
      shippingZip,
      shippingCountry,
      shippingCost, // number in cents, e.g. 499
      shippingRateId, // Printful rate ID, e.g. "STANDARD"
      shippingRateName // Human-readable name, e.g. "Flat Rate (3-4 business days)"
    } = body

    if (
      !amount ||
      !customerEmail ||
      !shippingAddress1 ||
      !shippingCity ||
      !shippingState ||
      !shippingZip ||
      !shippingCountry ||
      shippingCost === undefined
    ) {
      return NextResponse.json(
        { error: "Missing required checkout fields" },
        { status: 400 }
      )
    }

    // Total = product subtotal + shipping (both already in cents)
    const totalAmount = amount + shippingCost

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: "usd",

      automatic_payment_methods: {
        enabled: true
      },

      receipt_email: customerEmail,

      shipping: {
        name: customerName ?? customerEmail,
        phone: customerPhone,
        address: {
          line1: shippingAddress1,
          city: shippingCity,
          state: shippingState,
          postal_code: shippingZip,
          country: shippingCountry
        }
      },

      metadata: {
        customerEmail,
        customerName: customerName ?? "",
        customerPhone: customerPhone ?? "",
        cartItems: JSON.stringify(cartItems ?? []),
        shippingCost: shippingCost.toString(),
        shippingRateId: shippingRateId ?? "",
        shippingRateName: shippingRateName ?? ""
      },

      description: `Order for ${customerEmail}`
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    })
  } catch (error) {
    console.error("Payment intent error:", error)

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to create payment intent"
      },
      { status: 500 }
    )
  }
}
