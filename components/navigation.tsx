"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideShoppingCart, Menu } from "lucide-react"
import Image from "next/image"
import logo from "../public/logo.png"
import darkLogo from "../public/dark-logo.png"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useCart } from "@/lib/cart-context"
import { Badge } from "./ui/badge"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

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
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="px-10 md:px-20 h-20 flex items-center justify-between md:mx-auto">
        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-2 mt-8 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={`block text-lg font-medium hover:text-primary hover:bg-primary/5 transition-colors cursor-pointer px-4 py-3 rounded-lg ${
                      isActive(link.href) ? "text-primary bg-primary/5" : ""
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
            <Image
              src={logo}
              height={90}
              width={90}
              alt="Tech Babes Logo"
              className="dark:hidden block"
            />
            <Image
              src={darkLogo}
              height={90}
              width={90}
              alt="Tech Babes Logo"
              className="hidden dark:block"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium hover:text-primary transition-colors cursor-pointer relative group ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 ${
                    isActive(link.href) ? "scale-x-100" : ""
                  }`}
                />
              </span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative group hover:bg-transparent dark:hover:bg-transparent dark:border-transparent dark:hover:border-transparent transition-all"
            >
              <LucideShoppingCart className="transition-transform group-hover:scale-125 duration-200" />
              {count > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground dark:bg-primary/10 dark:text-primary dark:border-primary/20 hover:bg-primary dark:hover:bg-primary/20 rounded-full text-xs transition-transform group-hover:scale-125 duration-200">
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
