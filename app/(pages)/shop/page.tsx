// import ProductCard from "@/components/productCard"
// import { fetchProductsREST } from "@/lib/shopify"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import Link from "next/link"
// import productList from "../../../lib/shopify.json"
// import { Badge } from "@/components/ui/badge"

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

export default async function Page() {
  // const products: ShopifyProduct[] = await fetchProductsREST()
  // const products: ShopifyProduct[] = productList.products

  return <div>this is the shop page</div>

  // return (
  //   <div className="h-screen w-screen flex flex-col items-center bg-white text-black">
  //     <h1 className="self-start px-10 text-3xl pt-10 text-gray-600">
  //       Products
  //     </h1>

  //     {/* FILTERS */}
  //     <div className="flex gap-2 py-4 self-start px-10">
  //       <Badge className="bg-[#F1D3DA] text-[#BD5F77] text-xl font-semibold">
  //         All Items
  //       </Badge>
  //       <Badge className="bg-white border-3 text-[#BD5F77] text-xl">
  //         Tech Accessories
  //       </Badge>
  //       <Badge className="bg-white border-3 text-[#BD5F77] text-xl">Hats</Badge>
  //       <Badge className="bg-white border-3 text-[#BD5F77] text-xl">Mugs</Badge>
  //     </div>

  //     {/* PRODUCT LIST */}
  //     <ScrollArea className="h-[85vh]">
  //       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  //         {products.map((p: ShopifyProduct) => (
  //           <li key={p.id}>
  //             {/* <Link href={`/shop/${p.id}`}> */}
  //             <ProductCard
  //               name={p.title}
  //               link={`/shop/${p.id}`}
  //               image={p.image?.src}
  //               price={p.variants[0].price}
  //             />
  //             {/* </Link> */}
  //           </li>
  //         ))}
  //       </ul>
  //     </ScrollArea>
  //   </div>
  // )
}
