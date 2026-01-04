// import { PrintfulProduct } from "@/lib/types"
import { getAllProducts } from "@/lib/db/product-repository"
import { NextResponse } from "next/server"

// const PRINTFUL_API_TOKEN = process.env.NEXT_PUBLIC_PRINTFUL_API_TOKEN
// const PRINTFUL_API_BASE = "https://api.printful.com"
// const PRINTFUL_STORE_ID = process.env.NEXT_PUBLIC_PRINTFUL_STORE_ID

export async function GET() {
  const products = await getAllProducts()
  return NextResponse.json(products)
}

// export async function GET() {
//   try {
//     const productsRes = await fetch(`${PRINTFUL_API_BASE}/store/products`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${PRINTFUL_API_TOKEN}`,
//         "X-PF-Store-Id": `${PRINTFUL_STORE_ID}`,
//         "Content-Type": "application/json"
//       }
//     })

//     if (!productsRes.ok) {
//       return NextResponse.json({ error: productsRes.status })
//     }

//     const productsData = await productsRes.json()

//     const allDetails = await Promise.all(
//       productsData.result.map((product: PrintfulProduct) => {
//         return fetch(`${PRINTFUL_API_BASE}/store/products/${product.id}`, {
//           headers: {
//             Authorization: `Bearer ${PRINTFUL_API_TOKEN}`,
//             "X-PF-Store-Id": `${PRINTFUL_STORE_ID}`,
//             "Content-Type": "application/json"
//           }
//         }).then((r) => r.json())
//       })
//     )

//     const productsWithDetails = allDetails.map((item) => {
//       return item.result
//     })

//     return NextResponse.json(productsWithDetails)
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }
