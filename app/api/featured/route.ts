import { prisma } from "../../../lib/db/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const featured = await prisma.featuredProduct.findMany({
      orderBy: { order: "asc" },
      include: {
        Product: {
          include: { variants: true }
        }
      }
    })

    return NextResponse.json(featured)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to fetch featured products" },
      { status: 500 }
    )
  }
}
