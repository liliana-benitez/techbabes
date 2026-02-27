"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { ProductWithVariants } from "@/lib/types"
import Link from "next/link"
import NotFound from "../../../not-found"

function parseDescription(description: string) {
  const [text, ...rest] = description.split("\n\n")
  const bullets = rest
    .join("\n")
    .split("\n")
    .map((b) => b.replace(/^•\s*/, "").trim())
    .filter(Boolean)
  return { text, bullets }
}

type VariantWithCatalogId = ProductWithVariants["variants"][number] & {
  printfulCatalogVariantId: number | null
}

type ProductWithEnrichedVariants = Omit<ProductWithVariants, "variants"> & {
  variants: VariantWithCatalogId[]
}

export default function ProductPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<ProductWithEnrichedVariants | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${params.slug}`)
        if (!response.ok) {
          setProduct(null)
          setIsLoading(false)
          return
        }
        const data = await response.json()
        setProduct(data)
        console.log(JSON.stringify(data.description))
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setProduct(null)
        setIsLoading(false)
      }
    }

    if (params.slug) {
      fetchProduct()
    }
  }, [params.slug])

  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      const sizes = Array.from(
        new Set(
          product.variants
            .map((v) => v.size)
            .filter((v) => v && v.toUpperCase() !== "NULL")
        )
      )
      const colors = Array.from(
        new Set(product.variants.map((v) => v.color).filter(Boolean))
      )

      if (sizes.length > 0 && !selectedSize) {
        setSelectedSize(sizes[0])
      }
      if (colors.length > 0 && !selectedColor) {
        setSelectedColor(colors[0])
      }
    }
  }, [product, selectedSize, selectedColor])

  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      const variant = product.variants.find((v) => {
        const sizeMatch = !selectedSize || v.size === selectedSize
        const colorMatch = !selectedColor || v.color === selectedColor
        return sizeMatch && colorMatch
      })
      setSelectedVariant(variant?.id || null)
    }
  }, [selectedSize, selectedColor, product])

  if (isLoading) {
    return (
      <div className="flex flex-col gap-12 px-4 md:px-20 py-12">
        <div className="max-w-5xl mx-auto h-96 bg-muted/30 rounded-xl animate-pulse" />
      </div>
    )
  }

  if (!product) {
    return <NotFound />
  }

  const hasVariants = product.variants && product.variants.length > 0

  const sizes = hasVariants
    ? Array.from(
        new Set(
          product.variants
            .map((v) => v.size)
            .filter((v) => v && v.toUpperCase() !== "NULL")
        )
      )
    : []
  const colors = hasVariants
    ? Array.from(new Set(product.variants.map((v) => v.color).filter(Boolean)))
    : []

  const handleAddToCart = () => {
    if (hasVariants && selectedVariant) {
      const variant = product.variants.find((v) => v.id === selectedVariant)
      if (!variant) return
      const label = [variant.color, variant.size].filter(Boolean).join(" / ")
      console.log(
        "Variant being added to cart:",
        JSON.stringify(
          {
            printfulVariantId: variant.printfulVariantId,
            printfulCatalogVariantId: variant.printfulCatalogVariantId
          },
          null,
          2
        )
      )
      addToCart(
        product,
        variant.printfulVariantId.toString(),
        variant.printfulCatalogVariantId, // enriched by /api/products/[id]
        label
      )
    } else {
      addToCart(product, "", null, undefined)
    }
  }

  const currentPrice =
    hasVariants && selectedVariant
      ? product.variants.find((v) => v.id === selectedVariant)?.price ||
        product.price
      : product.price

  const canAddToCart = !hasVariants || selectedVariant !== null

  return (
    <div className="flex flex-col gap-12 px-4 md:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/shop"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-muted/20 rounded-xl relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square overflow-hidden bg-muted/20 rounded-lg relative border-2 transition-colors ${
                      selectedImage === idx
                        ? "border-primary"
                        : "border-transparent hover:border-border"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-8">
              {/* title */}
              <h1 className="font-display font-bold text-4xl">
                {product.name}
              </h1>

              {/* description  */}
              <div className="flex flex-col gap-4">
                <p className="text-lg">
                  {parseDescription(product.description).text}
                </p>

                {parseDescription(product.description).bullets.length > 0 && (
                  <ul className="space-y-1">
                    {parseDescription(product.description).bullets.map(
                      (bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-base"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                          {bullet}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>

              {/* price */}
              <div className="font-mono font-bold text-3xl">
                $
                {typeof currentPrice === "string"
                  ? parseFloat(currentPrice).toFixed(2)
                  : currentPrice.toFixed(2)}
              </div>
            </div>

            {hasVariants && (
              <div className="space-y-6 pt-6 border-t border-border">
                {sizes.length > 0 && (
                  <div>
                    <label className="font-semibold text-sm mb-3 block">
                      Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <Button
                          key={size}
                          variant={
                            selectedSize === size ? "default" : "outline"
                          }
                          onClick={() => setSelectedSize(size)}
                          className="min-w-15"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {colors.length > 1 && (
                  <div>
                    <label className="font-semibold text-sm mb-3 block">
                      Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => (
                        <Button
                          key={color}
                          variant={
                            selectedColor === color ? "lightPink" : "outline"
                          }
                          onClick={() => setSelectedColor(color)}
                          className="capitalize"
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="pt-6">
              <Button
                onClick={handleAddToCart}
                disabled={!canAddToCart}
                className="w-full btn-primary h-14 text-lg"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              {hasVariants && !canAddToCart && (
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Please select all options
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
