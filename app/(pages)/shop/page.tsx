"use client"

import ProductCard from "@/components/productCard"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [category, setCategory] = useState<string>("All")
  const [search, setSearch] = useState<string>("")
  const [products, setProducts] = useState<[]>([])

  const categories = ["All", "Apparel", "Hats", "Accessories", "Mugs"]

  const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`${BASE_URL}/api/printful/products`)
      const data = await response.json()
      setProducts(data)
      setIsLoading(false)
    }

    getProducts()
  }, [])

  console.log(products)

  const filteredProducts = products.filter((product) => {
    // const matchesCategory = category === "All" || product.category === category
    const matchesSearch = product.sync_product.name
      .toLowerCase()
      .includes(search.toLocaleLowerCase())
    // return matchesCategory && matchesSearch
    return matchesSearch
  })

  return (
    <div className="flex flex-col gap-4 px-20 py-12">
      <div className="flex flex-col justify-between mb-12 gap-4">
        <div>
          <h1 className="font-display font-bold text-4xl mb-4">
            Shop Collection
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse our curated selection of developer essentials. From dad hats
            to desk mats, we&apos;ve got your setup covered.
          </p>
        </div>

        <div className="w-full md:w-64 ">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant={category === cat ? "default" : "outline"}
            className="px-4 py-2 text-sm cursor-pointer transition-all hover:scale-105"
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-96 bg-muted/30 rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.sync_product.id}
              product={product.sync_product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted-foreground">
          <div className="font-mono text-xl mb-2">404: Products Not Found</div>
          <p>Try adjusting your search filters.</p>
        </div>
      )}
    </div>
  )
}
