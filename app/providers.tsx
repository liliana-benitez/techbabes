"use client"

import { CartProvider } from "@/lib/cart-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  )
}
