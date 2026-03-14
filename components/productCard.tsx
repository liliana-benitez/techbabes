"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { ProductWithVariants } from "@/lib/types"
import { useSearchParams } from "next/navigation"

interface ProductCardProps {
  product: ProductWithVariants
}

export default function ProductCard({ product }: ProductCardProps) {
  const searchParams = useSearchParams()
  const from = searchParams.toString() ? `?${searchParams.toString()}` : ""

  return (
    <Card className="group h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors duration-300 p-0 flex flex-col">
      <Link href={`/shop/${product.slug}?from=${encodeURIComponent(from)}`} className="flex flex-col grow">
        <div className="aspect-square overflow-hidden bg-muted/20 relative cursor-pointer">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill={true}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
        <CardContent className="p-4 grow flex flex-col">
          <h3 className="font-bold text-lg mb-auto group-hover:text-primary transition-colors cursor-pointer">
            {product.name}
          </h3>
          <div className="font-mono font-bold text-lg mt-3">
            $
            {typeof product.price === "string"
              ? parseFloat(product.price).toFixed(2)
              : product.price.toFixed(2)}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
