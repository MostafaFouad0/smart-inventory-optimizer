/*
  Warnings:

  - You are about to drop the column `date_id` on the `CategoryRevenueFact` table. All the data in the column will be lost.
  - You are about to drop the column `revenue_amount` on the `CategoryRevenueFact` table. All the data in the column will be lost.
  - You are about to drop the column `total_units_sold` on the `CategoryRevenueFact` table. All the data in the column will be lost.
  - Added the required column `dateId` to the `CategoryRevenueFact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revenueAmount` to the `CategoryRevenueFact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalUnitsSold` to the `CategoryRevenueFact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoryRevenueFact" DROP CONSTRAINT "CategoryRevenueFact_date_id_fkey";

-- AlterTable
ALTER TABLE "CategoryRevenueFact" DROP COLUMN "date_id",
DROP COLUMN "revenue_amount",
DROP COLUMN "total_units_sold",
ADD COLUMN     "dateId" INTEGER NOT NULL,
ADD COLUMN     "revenueAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "totalUnitsSold" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoryRevenueFact" ADD CONSTRAINT "CategoryRevenueFact_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("date_id") ON DELETE RESTRICT ON UPDATE CASCADE;
