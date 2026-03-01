import { NextRequest, NextResponse } from "next/server"

const printfulApiKey = process.env.PRINTFUL_API_KEY!

interface CartItem {
  printfulVariantId: string
  printfulCatalogVariantId: number | null
  quantity: number
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      cartItems,
      shippingAddress1,
      shippingCity,
      shippingState,
      shippingZip,
      shippingCountry
    }: {
      cartItems: CartItem[]
      shippingAddress1: string
      shippingCity: string
      shippingState: string
      shippingZip: string
      shippingCountry: string
    } = body

    // console.log("Cart items received:", JSON.stringify(cartItems, null, 2))

    if (
      !cartItems?.length ||
      !shippingAddress1 ||
      !shippingCity ||
      !shippingZip ||
      !shippingCountry
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const validItems = cartItems.filter((item) => item.printfulCatalogVariantId)

    if (!validItems.length) {
      return NextResponse.json(
        { error: "No valid Printful variants in cart" },
        { status: 400 }
      )
    }

    const printfulRes = await fetch("https://api.printful.com/shipping/rates", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${printfulApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recipient: {
          address1: shippingAddress1,
          city: shippingCity,
          state_code: shippingState,
          zip: shippingZip,
          country_code: shippingCountry
        },
        items: validItems.map((item) => ({
          variant_id: item.printfulCatalogVariantId,
          quantity: item.quantity
        }))
      })
    })

    if (!printfulRes.ok) {
      const err = await printfulRes.json()
      console.error("Printful shipping rates error:", err)
      return NextResponse.json(
        { error: "Failed to fetch shipping rates from Printful" },
        { status: 502 }
      )
    }

    const data = await printfulRes.json()
    const rates: Array<{ id: string; name: string; rate: string }> =
      data.result ?? []

    if (!rates.length) {
      return NextResponse.json(
        { error: "No shipping rates available for this address" },
        { status: 422 }
      )
    }

    const cheapest = rates.reduce((min, r) =>
      parseFloat(r.rate) < parseFloat(min.rate) ? r : min
    )

    return NextResponse.json({
      id: cheapest.id,
      name: cheapest.name,
      rate: cheapest.rate,
      rateInCents: Math.round(parseFloat(cheapest.rate) * 100)
    })
  } catch (error) {
    console.error("Shipping rates error:", error)
    return NextResponse.json(
      { error: "Failed to calculate shipping" },
      { status: 500 }
    )
  }
}
