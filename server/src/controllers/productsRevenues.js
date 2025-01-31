const dwhClient = require("../../prisma/dwh/client");

const getProdcutsRevenues = async (req, res) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const bussinessId = req.user.businessId;
  const results = await dwhClient.productRevenueFact.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: {
      businessId: bussinessId,
    },
    orderBy: {
      revenueAmount: "desc",
    },
    select: {
      revenueAmount: true,
      totalUnitsSold: true,
      product: {
        select: {
          name: true,
        },
      },
    },
  });
  const formattedResponse = results.map((result) => ({
    name: result.product.name,
    revenueAmount: result.revenueAmount,
    totalUnitsSold: result.totalUnitsSold,
  }));
  return res.status(200).json({
    data: formattedResponse,
  });
};

module.exports = getProdcutsRevenues;
