const client = require("../../prisma/main/client");

const isPresent = async (value, helpers) => {
  const { businessId } = helpers.prefs.context;
  const productName = value;
  const product = await client.product.findFirst({
    where: {
      name: productName,
      Batch: {
        some: {
          businessId,
        },
      },
    },
  });
  if (!product) {
    return helpers.error("any.custom");
  }
  return product.id;
};

const checkUniqueness = async (value, helpers) => {
  const { productName, batchId } = value;
  const { businessId } = helpers.prefs.context;

  const product = await client.product.findFirst({
    where: {
      name: productName,
      Batch: {
        some: { businessId },
      },
    },
  });

  if (!product) {
    return helpers.error("any.custom");
  }

  const exist = await client.batch.findFirst({
    where: {
      productId: product.id,
      id: batchId,
      businessId: businessId,
    },
  });

  if (exist) {
    return helpers.error("any.custom");
  }

  return { ...value, productId: product.id };
};

module.exports = { isPresent, checkUniqueness };
