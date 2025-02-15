const client = require("../../../prisma/main/client");
const insertBatchTransactions = async (data, message) => {
  const batches = data.goodRows.map((row) => {
    return {
      businessId: message.businessId,
      batchId: row.data.batchId,
      productId: row.data.productName,
      expiryDate: row.data.expiryDate,
      dateOfReceipt: row.data.dateOfReceipt,
      costOfGoods: row.data.costOfGoods,
      sellingPrice: row.data.sellingPrice,
      soldQuantity: 0,
      remQuantity: row.data.quantity,
    };
  });
  const transactions = data.goodRows.map((row) => {
    return {
      batchId: row.data.batchId,
      date: row.data.dateOfReceipt,
      amount: row.data.quantity,
      discount: 0,
    };
  });
  await client.$transaction(async (prisma) => {
    await prisma.batch.createMany({ data: batches });
    await prisma.transaction.createMany({ data: transactions });
  });
};

module.exports = insertBatchTransactions;
