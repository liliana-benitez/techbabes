import { getProductById } from "@/lib/db/product-repository"
import { NextRequest, NextResponse } from "next/server"

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params

  if (!id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    )
  }

  const product = await getProductById(parseInt(id))
  return NextResponse.json(product)
}
