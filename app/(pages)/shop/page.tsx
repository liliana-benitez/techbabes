// app/page.tsx
import { fetchProductsREST } from "@/lib/shopify"
import Image from "next/image"

type ShopifyProduct = {
  id: number
  title: string
  body_html: string
  vendor: string
  product_type: string
  created_at: string
  handle: string
  updated_at: string
  published_at: string
  template_suffix: string | null
  status: "active" | "draft" | "archived"
  published_scope: "web" | "global"
  tags: string
  admin_graphql_api_id: string
  variants: Array<{
    id: number
    title: string
    price: string
    sku: string
    position: number
    inventory_policy: string
    compare_at_price: string | null
    fulfillment_service: string
    inventory_management: string | null
    option1: string
    option2: string | null
    option3: string | null
    created_at: string
    updated_at: string
    taxable: boolean
    barcode: string | null
    grams: number
    image_id: number | null
    weight: number
    weight_unit: string
    inventory_item_id: number
    inventory_quantity: number
    old_inventory_quantity: number
    requires_shipping: boolean
    admin_graphql_api_id: string
  }>
  options: Array<{
    id: number
    name: string
    position: number
    values: string[]
  }>
  images: Array<{
    id: number
    product_id: number
    position: number
    created_at: string
    updated_at: string
    alt: string | null
    width: number
    height: number
    src: string
    variant_ids: number[]
    admin_graphql_api_id: string
  }>
  image: {
    id: number
    product_id: number
    position: number
    created_at: string
    updated_at: string
    alt: string | null
    width: number
    height: number
    src: string
    variant_ids: number[]
    admin_graphql_api_id: string
  } | null
}

export default async function Page() {
  const products: ShopifyProduct[] = await fetchProductsREST()

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-white text-black">
      {/* <h1>Products</h1> */}
      <ul className="grid grid-cols-3 gap-4">
        {products.map((p: ShopifyProduct) => (
          <li key={p.id}>
            <div className="flex flex-col items-center justify-center">
              {p.image && (
                <Image
                  src={p.image.src}
                  alt={p.title}
                  width={300}
                  height={300}
                />
              )}
              <h2 className="text-center">{p.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
