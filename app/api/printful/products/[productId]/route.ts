import { NextRequest, NextResponse } from "next/server"

const PRINTFUL_API_TOKEN = process.env.NEXT_PUBLIC_PRINTFUL_API_TOKEN
const PRINTFUL_API_BASE = "https://api.printful.com"
const PRINTFUL_STORE_ID = process.env.NEXT_PUBLIC_PRINTFUL_STORE_ID

interface RouteParams {
  params: Promise<{
    productId: string
  }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    if (!PRINTFUL_API_TOKEN || !PRINTFUL_STORE_ID) {
      return NextResponse.json(
        { error: "Missing Printful API credentials" },
        { status: 500 }
      )
    }

    const { productId } = await params

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      )
    }

    const response = await fetch(
      `${PRINTFUL_API_BASE}/store/products/${productId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${PRINTFUL_API_TOKEN}`,
          "X-PF-Store-Id": `${PRINTFUL_STORE_ID}`,
          "Content-Type": "application/json"
        }
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        {
          error: `Printful API error: ${response.status}`,
          details: errorData.result || errorData.error
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
