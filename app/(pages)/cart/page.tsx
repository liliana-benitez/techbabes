"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  LucideShoppingCart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-12 px-4 items-center md:px-20 py-12 md:items-start">
        <div className="mb-8">
          <LucideShoppingCart height={50} width={50} className="text-primary" />
        </div>
        <h1 className="font-display font-bold text-3xl mb-4">
          Your cart is empty
        </h1>
        <p className="text-muted-foreground mb-8">
          Looks like you haven&apos;t added any tech goodies yet.
        </p>
        <Link href="/shop">
          <Button className="btn-primary" size="lg">
            Start Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-12 px-4 items-center md:px-20 py-12 md:items-start">
      <h1 className="font-display font-bold text-4xl mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 bg-card border border-border rounded-xl shadow-sm"
            >
              <div className="h-24 w-24 rounded-lg overflow-hidden bg-muted shrink-0">
                <Image
                  src={item.images[0]}
                  width={200}
                  height={200}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-start text-muted-foreground">
                      {item.variantLabel && item.variantLabel}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() =>
                      removeFromCart(item.id, item.printfulVariantId)
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2 border border-input rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.printfulVariantId,
                          item.quantity - 1
                        )
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.printfulVariantId,
                          item.quantity + 1
                        )
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="font-bold text-lg">
                    $
                    {(
                      parseFloat(item.price.toString()) * item.quantity
                    ).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-muted/30 p-6 rounded-xl sticky top-24">
            <h3 className="font-bold text-xl mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout">
              <Button className="btn-primary w-full h-12 text-lg">
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
