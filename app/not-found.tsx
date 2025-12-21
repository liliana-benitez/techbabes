import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Custom404() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="relative mb-8">
        <h1 className="font-mono text-9xl font-bold opacity-20 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-primary/20 shadow-2xl">
            <h2 className="font-display text-4xl font-bold mb-2">
              System Error
            </h2>
            <p className="font-mono text-primary">Page_Not_Found_Exception</p>
          </div>
        </div>
      </div>

      <div className="max-w-md space-y-6">
        <p className="text-muted-foreground text-lg">
          Looks like you&apos;ve ventured into the void. The page you are
          looking for might have been moved, deleted, or never existed in this
          branch.
        </p>

        <div className="p-4 bg-muted/50 rounded-lg text-left font-mono text-sm overflow-x-auto">
          <span className="text-red-400">Error:</span> Route mismatch
          <br />
          <span className="text-blue-400">at</span> Router.resolve
          (client/router.ts:42)
          <br />
          <span className="text-blue-400">at</span> User.navigation
          (client/user.ts:1337)
        </div>

        <Link href="/">
          <Button className="btn-primary">Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
