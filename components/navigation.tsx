"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideShoppingCart, Menu } from "lucide-react"
import Image from "next/image"
import logo from "../public/logo.png"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useCart } from "@/lib/cart-context"
import { Badge } from "./ui/badge"

interface NavItem {
  id: number
  label: string
  href: string
  dropdownItems?: { id: number; content: string; url: string }[]
}

export default function Navigation() {
  const navLinks: NavItem[] = [
    { id: 1, label: "Shop", href: "/shop" },
    {
      id: 2,
      label: "About",
      href: "/about"
    },

    { id: 3, label: "Blog", href: "/blog" },
    {
      id: 5,
      label: "Contact",
      href: "/contact"
    }
  ]
  const { count } = useCart()
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`text-lg font-medium hover:text-primary transition-colors cursor-pointer ${
                      isActive(link.href) ? "text-[#e19fae]" : ""
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Image src={logo} height={80} width={80} alt="Tech Babes Logo" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium hover:text-[#e19fae] transition-colors cursor-pointer relative group ${
                  isActive(link.href) ? "text-[#e19fae]" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#e19fae] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 ${
                    isActive(link.href) ? "scale-x-100" : ""
                  }`}
                />
              </span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hidden sm:flex"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button> */}

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <LucideShoppingCart />
              {count > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground hover:bg-primary rounded-full text-xs">
                  {count}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
