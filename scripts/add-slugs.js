import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../generated/prisma/client/index.js"
import dotenv from "dotenv"
dotenv.config()

const connectionString = process.env.DATABASE_URL
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

async function main() {
  const products = await prisma.product.findMany()

  for (const product of products) {
    await prisma.product.update({
      where: { id: product.id },
      data: { slug: toSlug(product.name) }
    })
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
