import { prisma } from "./prisma"

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    include: {
      variants: true
    }
  })
  return products
}

export async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    },
    include: {
      variants: true
    }
  })

  return product
}
