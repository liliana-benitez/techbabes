import { getAllProducts } from "@/lib/db/product-repository"
import { NextResponse } from "next/server"

export async function GET() {
  const products = await getAllProducts()
  return NextResponse.json(products)
}
