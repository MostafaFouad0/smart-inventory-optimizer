const dwhClient = require("../../prisma/dwh/client");
/*
raw sql query to get the revenue of all product across all time for a specific business

SELECT "ProductDimension".name, "ProductRevenueFact"."revenueAmount", "ProductRevenueFact"."totalUnitsSold" 
FROM "ProductRevenueFact"
JOIN "ProductDimension" 
ON "ProductRevenueFact"."productId" = "ProductDimension"."productId"
WHERE "ProductRevenueFact"."businessId" = ${businessId}
*/
const getProdcutsRevenues = async (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const bussinessId = req.user.businessId;
  const order = req.query.orderBy || "desc";

  try {
    const results = await dwhClient.productRevenueFact.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        businessId: bussinessId,
      },
      orderBy: {
        revenueAmount: order,
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
  } catch (ex) {
    next(ex);
  }
};

module.exports = getProdcutsRevenues;
