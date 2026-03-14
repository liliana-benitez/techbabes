"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative group hover:bg-transparent dark:hover:bg-transparent"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-transform group-hover:scale-125 dark:group-hover:scale-0 duration-200" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative group hover:bg-transparent dark:hover:bg-transparent overflow-hidden"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0 group-hover:scale-125 dark:group-hover:scale-0 duration-200" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100 group-hover:scale-0 dark:group-hover:scale-125 duration-200" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
