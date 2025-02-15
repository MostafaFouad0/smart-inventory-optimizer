const client = require("../../prisma/main/client");
const getProductID = require("../services/maindb/getProductID");

const checkBatchAndAmount = async (value, helpers) => {
  const { businessId } = helpers.prefs.context;
  const { batchId, productName, amount } = value;

  const productID = getProductID(productName, businessId);
  if (!productID) return helpers.error("Product not found.");

  // Find the product that has this name and is associated with a batch that has the given batchId
  const batch = await client.batch.findFirst({
    where: {
      productId: product.id,
      id: batchId,
    },
  });
  if (!batch) return helpers.error("Batch not found.");

  if (amount > batch.remQuantity) {
    return helpers.error("Sale amount exceeds batch remaining quantity.");
  }

  //TODO: what should i return here?
  // Optionally attach productId or batch info for later use
  return { ...value, productId: product.id, batchInfo: batch };
};

module.exports = { checkBatchAndAmount };
