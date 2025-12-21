"use client"

import ProductCard from "@/components/productCard"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

// type ShopifyProduct = {
//   id: number
//   title: string
//   body_html: string
//   vendor: string
//   product_type: string
//   created_at: string
//   handle: string
//   updated_at: string
//   published_at: string
//   template_suffix: string | null
//   status: "active" | "draft" | "archived"
//   published_scope: "web" | "global"
//   tags: string
//   admin_graphql_api_id: string
//   variants: Array<{
//     id: number
//     title: string
//     price: string
//     sku: string
//     position: number
//     inventory_policy: string
//     compare_at_price: string | null
//     fulfillment_service: string
//     inventory_management: string | null
//     option1: string
//     option2: string | null
//     option3: string | null
//     created_at: string
//     updated_at: string
//     taxable: boolean
//     barcode: string | null
//     grams: number
//     image_id: number | null
//     weight: number
//     weight_unit: string
//     inventory_item_id: number
//     inventory_quantity: number
//     old_inventory_quantity: number
//     requires_shipping: boolean
//     admin_graphql_api_id: string
//   }>
//   options: Array<{
//     id: number
//     name: string
//     position: number
//     values: string[]
//   }>
//   images: Array<{
//     id: number
//     product_id: number
//     position: number
//     created_at: string
//     updated_at: string
//     alt: string | null
//     width: number
//     height: number
//     src: string
//     variant_ids: number[]
//     admin_graphql_api_id: string
//   }>
//   image: {
//     id: number
//     product_id: number
//     position: number
//     created_at: string
//     updated_at: string
//     alt: string | null
//     width: number
//     height: number
//     src: string
//     variant_ids: number[]
//     admin_graphql_api_id: string
//   } | null
// }

interface Product {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
  link: string
  category: string
}

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [category, setCategory] = useState<string>("All")
  const [search, setSearch] = useState<string>("")
  const [products, setProducts] = useState<Product[]>([])

  const categories = ["All", "Apparel", "Hats", "Accessories", "Mugs"]

  const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category
    const matchesSearch = product.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    async function getProducts() {
      console.log(BASE_URL)
      const response = await fetch(`${BASE_URL}/api/products`)
      const data = await response.json()
      setProducts(data)
      setIsLoading(false)
    }

    getProducts()
  }, [])

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
              key={product.id}
              name={product.title}
              link={product.link}
              image={product.imageUrl}
              price={product.price.toString()}
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
