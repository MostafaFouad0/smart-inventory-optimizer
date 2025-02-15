const client = require("../../../prisma/main/client");
const getProductID = require("./getProductID");

const insertSalesTransaction = async (data, message) => {
  const salesTransactions = data.goodRows.map((row) => ({
    batchId: row.data.batchId,
    date: row.data.date,
    amount: row.data.amount,
    discount: row.data.discount,
  }));

  await client.$transaction(async (prisma) => {
    // For each sale row, update the corresponding batch’s quantities
    for (const row of data.goodRows) {
      const saleAmount = row.data.amount;
      await prisma.batch.update({
        where: {
          id: row.data.batchId,
          productId: await getProductID(
            row.data.productName,
            message.businessId
          ),
        },
        data: {
          remQuantity: { decrement: saleAmount },
          soldQuantity: { increment: saleAmount },
        },
      });
    }
    // Insert the sales transactions into the Transaction table
    await prisma.transaction.createMany({ data: salesTransactions });
  });
};

module.exports = insertSalesTransaction;
