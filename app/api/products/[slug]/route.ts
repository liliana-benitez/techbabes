import { getProductBySlug } from "@/lib/db/product-repository"
import { NextRequest, NextResponse } from "next/server"

const printfulApiKey = process.env.PRINTFUL_API_KEY!

interface RouteParams {
  params: Promise<{
    slug: string
  }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { slug } = await params

  if (!slug) {
    return NextResponse.json(
      { error: "Product slug is required" },
      { status: 400 }
    )
  }

  const product = await getProductBySlug(slug)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

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
