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
        <Link href="/shop">
          <Button className="bg-[#F1D3DA] text-[#BD5F77] text-3xl font-light px-4 py-2 h-16 w-52">
            SHOP NOW
          </Button>
        </Link>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 place-items-center">
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <ProductCard
              name={product.title}
              link={product.imageUrl}
              image={product.imageUrl}
              price={product.price.toString()}
            />
          </div>
        ))}
      </div>

      {/* ABOUT SNEAK PEAK */}
      <div
        className="bg-[#F1D3DA] text-white bg-bottom flex flex-col items-center justify-center gap-10 h-100"
        // style={{
        //   backgroundImage: `url(${hero.src})`,
        //   backgroundPosition: "50% 15%"
        // }}
      >
        <h3 className=" text-md px-2 text-center  max-w-[70%] lg:text-2xl">
          My name is Lili, and I&apos;m a software engineer with just as much
          love for Javascript as I have for fashion. As I&apos;ve immersed
          myself in the tech world, I&apos;ve seen...
        </h3>
        <Link href="/about">
          <Button className="bg-[#F1D3DA] border-2 border-white text-white text-xl font-light px-4 py-2 h-10 w-40">
            READ MORE
          </Button>
        </Link>
      </div>
    </div>
  )
}
