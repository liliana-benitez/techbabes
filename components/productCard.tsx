import Link from "next/link"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { HeartIcon, PlusIcon } from "lucide-react"

type productCardProps = {
  name: string
  link: string
  image: string | undefined
  price: string
}

export default function ProductCard({
  name,
  link,
  image,
  price
}: productCardProps) {
  return (
    <div className="w-[200px] group relative space-y-4">
      <figure className="group-hover:opacity-90">
        <Image
          className="w-full rounded-lg aspect-square"
          src={image!}
          width={300}
          height={500}
          alt={name}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg">
            <Link href={link}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
        </div>
        {/* ⚠️ the price is invisible */}
        <p className="opacity-0 text-lg font-semibold">{price}</p>
      </div>
      {/* <div className="flex gap-4"> */}
      {/* <Button variant="outline" size="icon" className="flex-shrink-0">
          <HeartIcon className="size-4" />
        </Button>
        <Button variant="outline" className="w-full">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button> */}
      {/* </div> */}
    </div>
  )
}
