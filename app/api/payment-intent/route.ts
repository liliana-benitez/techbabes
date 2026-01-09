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
      shippingCountry
    } = body

    if (
      !amount ||
      !customerEmail ||
      !shippingAddress1 ||
      !shippingCity ||
      !shippingState ||
      !shippingZip ||
      !shippingCountry
    ) {
      return NextResponse.json(
        { error: "Missing required checkout fields" },
        { status: 400 }
      )
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
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
        cartItems: JSON.stringify(cartItems ?? [])
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
