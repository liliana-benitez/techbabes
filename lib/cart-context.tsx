import { Product } from "@/generated/prisma/client"
import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "sonner"

interface CartItem extends Product {
  quantity: number
  printfulVariantId: string
  variantLabel?: string | undefined
}

interface CartContextType {
  items: CartItem[]
  addToCart: (
    product: Product,
    variantId: string,
    variantLabel: string | undefined
  ) => void
  removeFromCart: (productId: number, variantId: string) => void
  updateQuantity: (
    productId: number,
    variantId: string,
    quantity: number
  ) => void
  clearCart: () => void
  total: number
  count: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = "shopping_cart"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error)
      }
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, isHydrated])

  const addToCart = (
    product: Product,
    variantId: string,
    variantLabel?: string
  ) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.printfulVariantId === variantId
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.printfulVariantId === variantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
          printfulVariantId: variantId,
          variantLabel
        }
      ]
    })

    toast(`${product.name} added to cart`)
  }

  const removeFromCart = (productId: number, variantId: string) => {
    setItems((current) =>
      current.filter(
        (item) =>
          !(item.id === productId && item.printfulVariantId === variantId)
      )
    )
  }

  const updateQuantity = (
    productId: number,
    variantId: string,
    quantity: number
  ) => {
    if (quantity < 1) {
      removeFromCart(productId, variantId)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.id === productId && item.printfulVariantId === variantId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        count
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
