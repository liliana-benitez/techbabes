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
      customerAddress,
      customerCity,
      customerState,
      customerZip,
      customerCountry
    } = body

    // Validate required fields
    if (!amount || !customerEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true
      },
      receipt_email: customerEmail,
      metadata: {
        customerName: customerName || "",
        customerPhone: customerPhone || "",
        customerEmail: customerEmail,
        // Store cart items as JSON string
        cartItems: JSON.stringify(cartItems || [])
      },
      shipping: {
        name: customerName,
        phone: customerPhone,
        address: {
          line1: customerAddress,
          city: customerCity,
          state: customerState,
          postal_code: customerZip,
          country: customerCountry
        }
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
