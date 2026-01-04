-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('CLOTHING', 'HATS', 'ACCESSORIES', 'MUGS');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "ProductCategory" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "printfulSyncId" INTEGER NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_printfulSyncId_key" ON "Product"("printfulSyncId");
