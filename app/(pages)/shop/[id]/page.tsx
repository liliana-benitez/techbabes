import { fetchProductByIdREST } from "@/lib/shopify"
import Image from "next/image"

type PageProps = Promise<{
  // params: {
  id: string
  // }
}>

export default async function ProductPage(props: { params: PageProps }) {
  const { id } = await props.params
  const product = await fetchProductByIdREST(id)

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <Image
        src={product.image?.src}
        alt={product.title}
        width={500}
        height={500}
        className="my-6"
      />
      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: product.body_html }}
      />
    </div>
  )
}
