-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "size" TEXT,
    "color" TEXT,
    "printfulVariantId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
