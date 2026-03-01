"use client"

import Link from "next/link"
import hero from "../public/hero.jpg"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
import ProductCard from "@/components/productCard"
import { ArrowRight, PenLine } from "lucide-react"
import Values from "@/components/values"
import { ProductWithVariants } from "@/lib/types"

export default function Home() {
  const [products, setProducts] = useState<ProductWithVariants[]>([])

  useEffect(() => {
    async function getFeatured() {
      const response = await fetch("/api/featured")
      const data = await response.json()
      setProducts(data.map((f: { Product: ProductWithVariants }) => f.Product))
    }

    getFeatured()
  }, [])

  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/60 to-background/80 z-10" />
          <Image
            src={hero}
            alt="Tech Workspace"
            className="w-full h-full object-cover object-[center_15%]"
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Empowering women in tech, {/* <br className="hidden md:block" /> */}
            {/* <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e19fae] to-[#ffccd5] text-glow"> */}
            starting with you
            {/* </span> */}
          </h1>

          {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"> */}
          {/* Premium merch for women in tech. Minimalist aesthetics meets maximum
            comfort for your coding sessions. */}
          {/* Premium merch for women in tech. */}
          {/* </p> */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/shop">
              <Button
                variant="outline"
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
      <section className="flex flex-col w-full px-10 md:px-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-bold text-3xl">New in</h2>
          <Link href="/shop">
            <Button variant="ghost" className="group">
              View All{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="w-full px-10 md:px-20">
        <h2 className="font-display font-bold text-3xl mb-8">Our values</h2>
        <Values />
      </section>

      {/* Blog Preview */}
      <section className="text-center px-10 md:px-20">
        <div className="w-full mx-auto space-y-8 py-16 px-8 rounded-2xl border border-border/50 bg-muted/20">
          <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <PenLine className="h-6 w-6" />
          </div>

          <div>
            <h2 className="font-display font-bold text-4xl mb-4">
              Blog Coming soon!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We’re working on thoughtful articles about women in tech,
              confidence, creativity, and building a career that feels like{" "}
              <em>you</em>.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="w-full px-20 pb-12">
        <h2 className="font-display font-bold text-3xl mb-8">
          Latest from our blog
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
      </section> */}
    </div>
  )
}
