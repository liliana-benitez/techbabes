import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import logo from "../public/logo.png"
import etsy from "../public/etsy.svg"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image src={logo} height={80} width={80} alt="Tech Babes Logo" />
            </Link>
          </div>

          {/* Discover */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h4 className="font-bold">Browse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground text-center md:text-left">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h4 className="font-bold">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground text-center md:text-left">
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-primary transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h4 className="font-bold">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thetechbabes?igsh=YjdtcGF0bjlxbWk2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.etsy.com/shop/TheTechBabes"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Image src={etsy} alt="Etsy logo" height={15} />
              </a>
              <a
                href="mailto:thetechbabes.inc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tech Babes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
