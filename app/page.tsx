"use client"

import Link from "next/link"
import hero from "../public/hero.jpg"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
import { blogPosts } from "@/lib/data"
import ProductCard from "@/components/productCard"
import { ArrowRight, Code, Cpu, Terminal } from "lucide-react"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL

  interface Product {
    id: number
    title: string
    description: string
    price: number
    imageUrl: string
    link: string
  }

  useEffect(() => {
    async function getProducts() {
      console.log(BASE_URL)
      const response = await fetch(`${BASE_URL}/api/products`)
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80 z-10" />
          <Image
            src={hero}
            alt="Tech Workspace"
            className="w-full h-full object-cover [object-position:center_10%]"
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e19fae]/10 text-[#e19fae] text-sm font-mono mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Terminal className="h-4 w-4" />
            <span className="font-semibold">v2.0.25 Release</span>
          </div> */}

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Empowering Women in Tech,
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e19fae] to-[#ffccd5] text-glow">
              One Product at a Time
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Premium merch for women in tech. Minimalist aesthetics meets maximum
            comfort for your coding sessions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/shop">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg h-12 bg-foreground text-background hover:bg-foreground/90"
              >
                Shop Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-lg h-12 backdrop-blur-sm"
              >
                Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 flex flex-col w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-bold text-3xl">New Drops</h2>
          <Link href="/shop">
            <Button variant="ghost" className="group">
              View All{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center content-center justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              link={product.link}
              price={product.price.toLocaleString()}
              image={product.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-[#e19fae]/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-[#e19fae]/10 flex items-center justify-center text-[#e19fae] mb-6">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Dev-First Design</h3>
            <p className="text-muted-foreground">
              Apparel designed with developer comfort in mind. Fabrics that
              breathe while you debug.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-[#e19fae]/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-[#e19fae]/10 flex items-center justify-center text-[#e19fae] mb-6">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Quality Specs</h3>
            <p className="text-muted-foreground">
              We treat our merch like our code: clean, high-performance, and
              built to last.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-[#e19fae]/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-[#e19fae] mb-6">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Community Driven</h3>
            <p className="text-muted-foreground">
              Supporting women in tech with every purchase. Join the Tech Babes
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="px-4">
        <h2 className="font-display font-bold text-3xl mb-8">
          Latest from the Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href="/blog">
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    width={500}
                    height={500}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-sm font-mono text-[#e19fae] mb-2">
                  {`${post.date} // ${post.category}`}
                </div>
                <h3 className="font-bold text-xl group-hover:text-[#e19fae] transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
