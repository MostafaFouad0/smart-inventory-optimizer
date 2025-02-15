const client = require("../../../prisma/main/client");

module.exports = async (productName, businessID) => {
  try {
    const product = await client.product.findFirst({
      where: {
        name: productName,
        businessId: businessID,
      },
      select: {
        Id: true,
      },
    });

    return product?.Id || null;
  } catch (error) {
    throw new Error(`Error fetching product ID: ${error.message}`);
  }
};
