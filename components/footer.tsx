import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Tech Babes</h3>
            <p className="text-muted-foreground text-sm">
              Empowering women in tech with style and code.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shop">Apparel</Link>
              </li>
              <li>
                <Link href="/shop">Accessories</Link>
              </li>
              <li>
                <Link href="/shop">New Arrivals</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-primary">
                  Discord
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <Image src={logo} height={100} width={100} alt="Tech Babes Logo" />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tech Babes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
