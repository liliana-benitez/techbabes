"use client"

import { CartProvider } from "@/lib/cart-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  )
}
