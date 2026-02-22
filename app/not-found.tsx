import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GOOSE_ASCII } from "../lib/goose"

export default function Custom404() {
  return (
    <div className="min-h-[80vh] flex flex-col gap-4 items-center justify-center p-4 text-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-mono text-8xl font-black text-primary opacity-30 select-none leading-none">
          404
        </h1>
        <h2 className="font-display text-4xl font-bold">Page Not Found</h2>
      </div>

      <div className="max-w-md space-y-6">
        <pre className="text-primary font-semibold text-sm leading-tight text-left overflow-x-auto whitespace-pre">
          {GOOSE_ASCII}
        </pre>

        <p className="text-muted-foreground text-lg">
          We are unable to locate this page at this time.{" "}
          <span className="text-foreground font-medium">
            A silly goose is responsible.
          </span>{" "}
          She knows what she did.
        </p>

        <Link href="/shop">
          <Button className="btn-primary">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  )
}
