"use client"

import Link from "next/link"
import hero from "../public/hero.jpg"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import ProductCard from "@/components/productCard"

export default function Home() {
  const [products, setProducts] = useState([])

  const getBaseUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : "https://tech-babes.vercel.app"
    }
  }

  interface ProductType {
    id: number
    title: string
    description: string
    price: number
    imageUrl: string
    link: string
  }

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`${getBaseUrl()}/api/products`)
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  return (
    <div>
      {/* HERO */}
      <div
        className="bg-cover bg-bottom h-[85vh] flex flex-col items-center justify-center gap-20"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundPosition: "50% 15%"
        }}
      >
        <h1 className="text-white text-5xl px-2 font-semibold text-center text-shadow-lg max-w-[70%] lg:text-6xl">
          Empowering Women in Tech, <br /> One Product at a Time
        </h1>
        {/* <h2 className="text-white px-10 font-semibold text-xl text-shadow-md text-center">
          Empowering Women in Tech, One Product at a Time
        </h2> */}
        <Link href="/what-we-do">
          <Button className="bg-[#F1D3DA] text-[#BD5F77] text-3xl font-light px-4 py-2 h-16 w-52">
            SHOP NOW
          </Button>
        </Link>
      </div>

      {/* PRODUCTS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 place-items-center">
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <ProductCard
              name={product.title}
              link={product.imageUrl}
              image={product.imageUrl}
              price={product.price.toString()}
              category="something"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
