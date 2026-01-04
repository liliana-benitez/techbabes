import { prisma } from "./prisma"

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    include: {
      variants: true
    }
  })
  return products
}
