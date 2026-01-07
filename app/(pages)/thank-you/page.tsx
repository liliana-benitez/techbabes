import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ThankYou() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="h-24 w-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 animate-in zoom-in duration-500">
        <CheckCircle2 className="h-12 w-12" />
      </div>

      <h1 className="font-display font-bold text-4xl mb-4">Order Confirmed!</h1>
      <p className="text-muted-foreground text-lg max-w-md mb-8">
        Thank you for shopping with Tech Babes. We&apos;ve sent a confirmation
        email with your order details.
      </p>

      <Link href="/shop">
        <Button size="lg" className="btn-primary rounded-full px-8">
          Continue Shopping
        </Button>
      </Link>
    </div>
  )
}
