/*
  Warnings:

  - Changed the type of `hasExpiryDate` on the `Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "hasExpiryDate",
ADD COLUMN     "hasExpiryDate" BOOLEAN NOT NULL;
