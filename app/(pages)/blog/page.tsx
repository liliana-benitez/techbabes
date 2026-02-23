"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PenLine } from "lucide-react"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-20 py-12">
      <div className="max-w-xl text-center space-y-6">
        <div className="mx-auto h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <PenLine className="h-7 w-7" />
        </div>

        <h1 className="font-display font-bold text-4xl">
          The Blog Is Coming Soon
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          We’re working on thoughtful content about women in tech, confidence,
          creativity, and building a career you actually love.
          <br />
          <span className="font-medium text-foreground">
            No hustle culture. No gatekeeping.
          </span>
        </p>

        <div className="h-px w-24 mx-auto bg-border" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/shop">
            <Button size="lg" className="btn-pink">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
