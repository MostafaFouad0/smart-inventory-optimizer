-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "establishmentDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "businessId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CSVStatus" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "uploadedDate" TIMESTAMP(3) NOT NULL,
    "path" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,

    CONSTRAINT "CSVStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "batchId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "hasExpiryDate" TIMESTAMP(3) NOT NULL,
    "Image" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Batch" (
    "id" SERIAL NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "sellingPrice" INTEGER NOT NULL,
    "costOfGoods" INTEGER NOT NULL,
    "remQuantity" INTEGER NOT NULL,
    "soldQuantity" INTEGER NOT NULL,
    "dateOfReceipt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "businessId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CSVStatus" ADD CONSTRAINT "CSVStatus_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
