// import { Link } from "wouter"
// import { Product } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { useCart } from "@/lib/cart-context"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

export function ProductCard({ product }: { product: Product }) {
  // const { addToCart } = useCart()

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-colors duration-300">
      {/* <Link href={`/product/${product.id}`}> */}
      <div className="aspect-square overflow-hidden bg-muted/20 relative cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      {/* </Link> */}
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-1 font-mono uppercase tracking-wider">
          {product.category}
        </div>
        {/* <Link href={`/product/${product.id}`}> */}
        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors cursor-pointer">
          {product.name}
        </h3>
        {/* </Link> */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
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
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          // onClick={() => addToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
