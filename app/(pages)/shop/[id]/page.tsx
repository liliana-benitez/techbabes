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
    <div className="p-10 flex ">
      <Image
        src={product.image?.src}
        alt={product.title}
        width={500}
        height={500}
        className="my-6"
      />
      <div>
        {/* <p>{"const product = {"}</p> */}
        {/* <p className="">name: {product.title} ,</p> */}
        {/* <span>{'description = "'}</span> */}
        <p dangerouslySetInnerHTML={{ __html: product.body_html }} />
        {/* <span>{'"'}</span> */}
      </div>
    </div>
  )
}

// const object = {
//   name: 'name',
//   description: 'description'
// }
