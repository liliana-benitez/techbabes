"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import logo from "../public/logo.png"

// Hook to detect screen size
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}

interface NavItem {
  id: number
  content: string
  url: string
  dropdownItems?: { id: number; content: string; url: string }[]
}

export default function Navigation() {
  const [nav, setNav] = useState(false)
  const pathname = usePathname()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  function handleNav() {
    setNav(!nav)
  }

  useEffect(() => {
    setNav(false)
  }, [pathname])

  const items: NavItem[] = [
    { id: 1, content: "Shop", url: "/shop" },
    {
      id: 2,
      content: "About",
      url: "/about"
    },

    { id: 3, content: "Blog", url: "/blog" },
    {
      id: 5,
      content: "Contact",
      url: "/contact"
    }
  ]

  return (
    <div className="border-b-1">
      <div className="flex justify-between items-center px-10 py-3">
        <Link href={"/"}>
          <Image src={logo} alt="itsYamiG logo" height={50} width={50} />
        </Link>

        {/* DESKTOP NAV */}
        {isDesktop && (
          <ul className="flex gap-6">
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className="text-gray-500 font-semibold outline-none border-none"
                    href={item.url}
                  >
                    {item.content}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}

        {/* MOBILE BURGER ICON */}
        {!isDesktop && (
          <div onClick={handleNav} className="block">
            {nav ? <X /> : <Menu />}
          </div>
        )}
      </div>

      {/* MOBILE NAV */}
      {!isDesktop && nav && (
        <ul className="flex flex-col justify-center items-center gap-2 pb-6">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  className="text-gray-500 font-semibold"
                  href={item.url}
                  onClick={() => setNav(false)}
                >
                  {item.content}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
