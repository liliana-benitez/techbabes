"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { ProductWithVariants } from "@/lib/types"
import Link from "next/link"
import NotFound from "../../../not-found"
import { Skeleton } from "@/components/ui/skeleton"

function parseDescription(description: string) {
  const [text, ...rest] = description.split("\n\n")
  const bullets = rest
    .join("\n")
    .split("\n")
    .map((b) => b.replace(/^•\s*/, "").trim())
    .filter(Boolean)
  return { text, bullets }
}

function CodeText({ text }: { text: string }) {
  const parts = text.split(/(<[^>]+>)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<") && part.endsWith(">")) {
          return (
            <span key={i} className="text-primary font-semibold">
              {part}
            </span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
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
  const [isExpanded, setIsExpanded] = useState(false)

  const searchParams = useSearchParams()
  const from = searchParams.get("from") || ""

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
      ).sort((a, b) => {
        const aIndex = product.images.findIndex((url) =>
          url.toLowerCase().includes(a!.toLowerCase())
        )
        const bIndex = product.images.findIndex((url) =>
          url.toLowerCase().includes(b!.toLowerCase())
        )
        return aIndex - bIndex
      })

      if (sizes.length > 0) setSelectedSize(sizes[0])
      if (colors.length > 0) setSelectedColor(colors[0])
    }
  }, [product])

  // Sync variant + image when size or color changes
  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      const variant = product.variants.find((v) => {
        const sizeMatch = !selectedSize || v.size === selectedSize
        const colorMatch = !selectedColor || v.color === selectedColor
        return sizeMatch && colorMatch
      })
      setSelectedVariant(variant?.id || null)
    }

    if (selectedColor && product?.images) {
      const colorIndex = product.images.findIndex((url) =>
        url.toLowerCase().includes(selectedColor.toLowerCase())
      )
      if (colorIndex !== -1) setSelectedImage(colorIndex)
    }
  }, [selectedSize, selectedColor, product])

  if (isLoading) {
    return (
      <div className="flex flex-col gap-12 px-4 md:px-20 py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Back link */}
          <Skeleton className="h-5 w-24 mb-8 bg-muted/30" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Image gallery skeleton */}
            <div className="space-y-4">
              <Skeleton className="aspect-square w-full rounded-xl bg-muted/30" />
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton
                    key={i}
                    className="aspect-square w-full rounded-lg bg-muted/30"
                  />
                ))}
              </div>
            </div>

            {/* Product info skeleton */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-8">
                {/* Title */}
                <Skeleton className="h-10 w-3/4 bg-muted/30" />

                {/* Description lines */}
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-full bg-muted/30" />
                  <Skeleton className="h-5 w-5/6 bg-muted/30" />
                  <Skeleton className="h-5 w-4/6 bg-muted/30" />
                  <div className="mt-2 flex flex-col gap-2">
                    <Skeleton className="h-4 w-[75%] bg-muted/30" />
                    <Skeleton className="h-4 w-[80%] bg-muted/30" />
                    <Skeleton className="h-4 w-[85%] bg-muted/30" />
                  </div>
                </div>

                {/* Price */}
                <Skeleton className="h-9 w-28 bg-muted/30" />
              </div>

              {/* Size selector */}
              <div className="space-y-6 pt-6 border-t border-border">
                <div>
                  <Skeleton className="h-4 w-10 mb-3 bg-muted/30" />
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-9 w-14 bg-muted/30" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Add to cart button */}
              <div className="pt-6">
                <Skeleton className="h-14 w-full bg-muted/30" />
              </div>
            </div>
          </div>
        </div>
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
    ? Array.from(
        new Set(product.variants.map((v) => v.color).filter(Boolean))
      ).sort((a, b) => {
        const aIndex = product.images.findIndex((url) =>
          url.toLowerCase().includes(a!.toLowerCase())
        )
        const bIndex = product.images.findIndex((url) =>
          url.toLowerCase().includes(b!.toLowerCase())
        )
        return aIndex - bIndex
      })
    : []

  const handleAddToCart = () => {
    if (hasVariants && selectedVariant) {
      const variant = product.variants.find((v) => v.id === selectedVariant)
      if (!variant) return
      const label = [variant.color, variant.size].filter(Boolean).join(" / ")
      // console.log(
      //   "Variant being added to cart:",
      //   JSON.stringify(
      //     {
      //       printfulVariantId: variant.printfulVariantId,
      //       printfulCatalogVariantId: variant.printfulCatalogVariantId
      //     },
      //     null,
      //     2
      //   )
      // )
      addToCart(
        product,
        variant.printfulVariantId.toString(),
        variant.printfulCatalogVariantId,
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
          href={`/shop${from}`}
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
            <div className="flex flex-col gap-6 lg:aspect-square">
              {/* VS Code Style Editor */}
              <div className="rounded-xl border border-border/50 shadow-sm flex flex-col grow lg:max-h-[600px] overflow-hidden bg-background">
                {/* Tabs Bar */}
                <div className="flex items-end px-3 pt-2 bg-muted/40 shrink-0 border-b border-border/50">
                  <div className="flex items-center gap-2 pr-4 pb-2.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 dark:border-transparent" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 dark:border-transparent" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 dark:border-transparent" />
                  </div>
                  <div className="flex items-center gap-2 px-4 h-9 bg-background text-xs font-mono rounded-t-lg text-foreground border-x border-t border-border/50 shadow-[0_-2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.1)] -mb-px">
                    <span className="text-primary font-bold text-sm">
                      {"❖"}
                    </span>
                    product.md
                  </div>
                </div>

                {/* Editor Content */}
                <div
                  className={`
                    p-6 md:p-8 font-mono text-sm leading-8 lg:overflow-y-auto grow flex flex-col gap-8 text-slate-700 dark:text-[#A1A1AA] relative
                    ${!isExpanded ? "max-h-[320px] lg:max-h-none overflow-hidden lg:overflow-visible" : ""}
                  `}
                >
                  {/* Markdown Title & Price */}
                  <div className="flex flex-col gap-4 mb-2">
                    <h1 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-foreground">
                      <span className="text-muted-foreground font-normal mr-4">
                        #
                      </span>
                      {product.name}
                    </h1>
                    <div className="font-mono font-bold text-xl">
                      <span className="text-muted-foreground font-normal mr-4">
                        ##
                      </span>
                      $
                      {typeof currentPrice === "string"
                        ? parseFloat(currentPrice).toFixed(2)
                        : currentPrice.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <p className="whitespace-pre-wrap leading-relaxed">
                      <CodeText
                        text={parseDescription(product.description).text}
                      />
                    </p>

                    {parseDescription(product.description).bullets.length >
                      0 && (
                      <ul className="space-y-4">
                        {parseDescription(product.description).bullets.map(
                          (bullet, i) => {
                            const isCheck = bullet.startsWith("✓")
                            const isDash = bullet.startsWith("-")
                            const content =
                              isCheck || isDash
                                ? bullet.slice(1).trim()
                                : bullet

                            return (
                              <li key={i} className="flex items-start gap-4">
                                {isCheck ? (
                                  <span className="shrink-0 text-emerald-500 font-bold">
                                    ✓
                                  </span>
                                ) : (
                                  <span className="shrink-0 text-muted-foreground font-bold">
                                    -
                                  </span>
                                )}
                                <span>
                                  <CodeText text={content} />
                                </span>
                              </li>
                            )
                          }
                        )}
                      </ul>
                    )}
                  </div>

                  {/* Fade-out Overlay (Mobile Only) */}
                  {!isExpanded && (
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none lg:hidden" />
                  )}
                </div>

                {/* VS Code Status Bar (Mobile Only) */}
                <div className="flex items-center justify-between px-3 h-7 bg-muted/30 border-t border-border/50 text-[10px] font-mono text-muted-foreground shrink-0 lg:hidden">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 hover:text-foreground cursor-default transition-colors">
                      <span className="text-primary text-[12px]">{"⌥"}</span>
                      <span>main*</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                      <span className="text-emerald-500">○</span>
                      <span>0</span>
                      <span className="text-amber-500">△</span>
                      <span>0</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-bold"
                    >
                      {isExpanded ? "[ Collapse ]" : "[ Read More ]"}
                    </button>
                    <div className="hidden sm:flex items-center gap-3 opacity-60">
                      <span>Ln 1, Col 1</span>
                      <span>UTF-16</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {hasVariants && (
              <div className="space-y-8 pt-6 border-t border-border">
                {sizes.length > 0 && (
                  <div>
                    <label className="font-mono font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                      [ Select Size ]
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`
                            min-w-[42px] h-9 px-3 font-mono text-xs font-bold rounded-md transition-all relative
                            border-x border-t border-border/50
                            ${
                              selectedSize === size
                                ? "bg-primary text-white border-b-primary shadow-[0_3px_0_0_#9d174d] translate-y-[-1px]"
                                : "bg-muted/30 text-foreground border-b-border shadow-[0_3px_0_0_hsl(var(--border))] hover:translate-y-[-0.5px] hover:shadow-[0_3.5px_0_0_hsl(var(--border))]"
                            }
                            active:translate-y-[2px] active:shadow-none
                          `}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {colors.length > 1 && (
                  <div>
                    <label className="font-mono font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                      [ Select Color ]
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`
                            h-9 px-4 font-mono text-xs font-bold rounded-md transition-all relative capitalize
                            border-x border-t border-border/50
                            ${
                              selectedColor === color
                                ? "bg-primary text-white border-b-primary shadow-[0_3px_0_0_#9d174d] translate-y-[-1px]"
                                : "bg-muted/30 text-foreground border-b-border shadow-[0_3px_0_0_hsl(var(--border))] hover:translate-y-[-0.5px] hover:shadow-[0_3.5px_0_0_hsl(var(--border))]"
                            }
                            active:translate-y-[2px] active:shadow-none
                          `}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="pt-10">
              <button
                onClick={handleAddToCart}
                disabled={!canAddToCart}
                className={`
                  w-full h-14 font-mono text-base font-bold rounded-xl transition-all relative flex items-center justify-center gap-3
                  border-x border-t
                  ${
                    canAddToCart
                      ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-950 dark:border-white shadow-[0_4px_0_0_#000] dark:shadow-[0_4px_0_0_#cbd5e1] hover:translate-y-[-1px] hover:shadow-[0_5px_0_0_#000] dark:hover:shadow-[0_5px_0_0_#cbd5e1]"
                      : "bg-muted text-muted-foreground border-border shadow-[0_4px_0_0_hsl(var(--border))] cursor-not-allowed opacity-50"
                  }
                  active:translate-y-[3px] active:shadow-none
                `}
              >
                <ShoppingCart className="h-4 w-4" />
                ADD TO CART
              </button>
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
