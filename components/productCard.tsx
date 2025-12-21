import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { Product } from "@/lib/types"

export default function ProductCard({ product }: { product: Product }) {
  // const { addToCart } = useCart()

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-colors duration-300 p-0 flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted/20 relative cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill={true}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
      </Link>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="text-xs text-muted-foreground mb-1 font-mono uppercase tracking-wider">
          {product.category}
        </div>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>
        <div className="font-mono font-bold text-lg">
          $
          {typeof product.price === "string"
            ? parseFloat(product.price).toFixed(2)
            : product.price.toFixed(2)}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full btn-primary hover:bg-primary/90 text-primary-foreground font-medium">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

// add onclick to cart button
