// import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
// import Link from "next/link"

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-20 py-12 h-[79vh]">
      <div className="h-24 w-24 rounded-full bg-primary/20 text-primary flex items-center justify-center animate-in zoom-in duration-500">
        <Heart className="h-12 w-12" />
      </div>
      <h1 className="font-display font-bold text-4xl">Order Confirmed!</h1>
      <p className="text-center text-muted-foreground text-lg max-w-md">
        Thank you for shopping with Tech Babes. We&apos;ve sent a confirmation
        email with your order details.
      </p>
      {/* <Link href="/shop">
        <Button size="lg" className="btn-primary rounded-full px-8">
          Continue Shopping
        </Button>
      </Link> */}
    </div>
  )
}
