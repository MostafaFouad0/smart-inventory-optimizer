-- CreateTable
CREATE TABLE "BusinessDimension" (
    "businessId" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,

    CONSTRAINT "BusinessDimension_pkey" PRIMARY KEY ("businessId")
);

-- CreateTable
CREATE TABLE "CategoryDimension" (
    "categoryId" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,
    "hasExpiryDate" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CategoryDimension_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "ProductDimension" (
    "productId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "nextExpiryDateId" INTEGER,

    CONSTRAINT "ProductDimension_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "ProductRevenueFact" (
    "productId" INTEGER NOT NULL,
    "businessId" TEXT NOT NULL,
    "dateId" INTEGER NOT NULL,
    "revenueAmount" DOUBLE PRECISION NOT NULL,
    "totalUnitsSold" INTEGER NOT NULL,

    CONSTRAINT "ProductRevenueFact_pkey" PRIMARY KEY ("productId","businessId")
);

-- CreateTable
CREATE TABLE "CategoryRevenueFact" (
    "businessId" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "date_id" INTEGER NOT NULL,
    "revenue_amount" DOUBLE PRECISION NOT NULL,
    "total_units_sold" INTEGER NOT NULL,

    CONSTRAINT "CategoryRevenueFact_pkey" PRIMARY KEY ("businessId","categoryId")
);

-- CreateTable
CREATE TABLE "BatchPrice" (
    "productId" INTEGER NOT NULL,
    "businessId" TEXT NOT NULL,
    "dateId" INTEGER NOT NULL,
    "purchase_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "BatchPrice_pkey" PRIMARY KEY ("productId","businessId")
);

-- CreateTable
CREATE TABLE "DateDimension" (
    "date_id" SERIAL NOT NULL,
    "full_date" TIMESTAMP(3) NOT NULL,
    "day" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "quarter" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "DateDimension_pkey" PRIMARY KEY ("date_id")
);

-- AddForeignKey
ALTER TABLE "ProductDimension" ADD CONSTRAINT "ProductDimension_nextExpiryDateId_fkey" FOREIGN KEY ("nextExpiryDateId") REFERENCES "DateDimension"("date_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDimension" ADD CONSTRAINT "ProductDimension_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CategoryDimension"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRevenueFact" ADD CONSTRAINT "ProductRevenueFact_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("date_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRevenueFact" ADD CONSTRAINT "ProductRevenueFact_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "BusinessDimension"("businessId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRevenueFact" ADD CONSTRAINT "ProductRevenueFact_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductDimension"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryRevenueFact" ADD CONSTRAINT "CategoryRevenueFact_date_id_fkey" FOREIGN KEY ("date_id") REFERENCES "DateDimension"("date_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryRevenueFact" ADD CONSTRAINT "CategoryRevenueFact_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "BusinessDimension"("businessId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryRevenueFact" ADD CONSTRAINT "CategoryRevenueFact_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CategoryDimension"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BatchPrice" ADD CONSTRAINT "BatchPrice_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "DateDimension"("date_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BatchPrice" ADD CONSTRAINT "BatchPrice_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "BusinessDimension"("businessId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BatchPrice" ADD CONSTRAINT "BatchPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductDimension"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;
