import { getProductById } from "@/lib/db/product-repository"
import { NextRequest, NextResponse } from "next/server"

const printfulApiKey = process.env.PRINTFUL_API_KEY!

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

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  // Enrich each variant with the Printful catalog variant_id needed for shipping rates
  const enrichedVariants = await Promise.all(
    product.variants.map(async (variant) => {
      try {
        const res = await fetch(
          `https://api.printful.com/store/variants/${variant.printfulVariantId}`,
          {
            headers: {
              Authorization: `Bearer ${printfulApiKey}`
            }
          }
        )

        if (!res.ok) return { ...variant, printfulCatalogVariantId: null }

        const data = await res.json()
        const catalogVariantId = data.result?.variant_id ?? null

        return { ...variant, printfulCatalogVariantId: catalogVariantId }
      } catch {
        return { ...variant, printfulCatalogVariantId: null }
      }
    })
  )

  return NextResponse.json({ ...product, variants: enrichedVariants })
}
