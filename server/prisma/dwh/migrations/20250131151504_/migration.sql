/*
  Warnings:

  - You are about to alter the column `purchase_price` on the `BatchPrice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `revenueAmount` on the `CategoryRevenueFact` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - The primary key for the `DateDimension` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date_id` on the `DateDimension` table. All the data in the column will be lost.
  - You are about to drop the column `full_date` on the `DateDimension` table. All the data in the column will be lost.
  - You are about to alter the column `revenueAmount` on the `ProductRevenueFact` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - Added the required column `fullDate` to the `DateDimension` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BatchPrice" DROP CONSTRAINT "BatchPrice_dateId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryRevenueFact" DROP CONSTRAINT "CategoryRevenueFact_dateId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDimension" DROP CONSTRAINT "ProductDimension_nextExpiryDateId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRevenueFact" DROP CONSTRAINT "ProductRevenueFact_dateId_fkey";

-- AlterTable
ALTER TABLE "BatchPrice" ALTER COLUMN "purchase_price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "CategoryRevenueFact" ALTER COLUMN "revenueAmount" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "DateDimension" DROP CONSTRAINT "DateDimension_pkey",
DROP COLUMN "date_id",
DROP COLUMN "full_date",
ADD COLUMN     "dateId" SERIAL NOT NULL,
ADD COLUMN     "fullDate" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "DateDimension_pkey" PRIMARY KEY ("dateId");

-- AlterTable
ALTER TABLE "ProductRevenueFact" ALTER COLUMN "revenueAmount" SET DATA TYPE DECIMAL(65,30);

-- CreateTable
CREATE TABLE "InventoryFact" (
    "productId" INTEGER NOT NULL,
    "businessId" TEXT NOT NULL,
    "dateId" INTEGER NOT NULL,
    "currentStock" INTEGER NOT NULL,

    CONSTRAINT "InventoryFact_pkey" PRIMARY KEY ("productId","businessId","dateId")
);

-- CreateTable
CREATE TABLE "TransactionFact" (
    "transactionId" SERIAL NOT NULL,
    "businessId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "dateId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "sellingPrice" DECIMAL(65,30) NOT NULL,
    "purchasePrice" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "TransactionFact_pkey" PRIMARY KEY ("transactionId")
);

-- AddForeignKey
ALTER TABLE "ProductDimension" ADD CONSTRAINT "ProductDimension_nextExpiryDateId_fkey" FOREIGN KEY ("nextExpiryDateId") REFERENCES "DateDimension"("dateId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRevenueFact" ADD CONSTRAINT "ProductRevenueFact_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("dateId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryRevenueFact" ADD CONSTRAINT "CategoryRevenueFact_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("dateId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BatchPrice" ADD CONSTRAINT "BatchPrice_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("dateId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryFact" ADD CONSTRAINT "InventoryFact_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "BusinessDimension"("businessId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryFact" ADD CONSTRAINT "InventoryFact_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductDimension"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryFact" ADD CONSTRAINT "InventoryFact_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("dateId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionFact" ADD CONSTRAINT "TransactionFact_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "BusinessDimension"("businessId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionFact" ADD CONSTRAINT "TransactionFact_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductDimension"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionFact" ADD CONSTRAINT "TransactionFact_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("dateId") ON DELETE RESTRICT ON UPDATE CASCADE;
