const dwhClient = require("../../prisma/dwh/client");
/*
raw sql query to get the revenue of all product across all time for a specific business

SELECT "ProductDimension".name, SUM("ProductRevenueFact"."revenueAmount") as total_revenue
FROM "ProductRevenueFact"
JOIN "ProductDimension" 
ON "ProductRevenueFact"."productId" = "ProductDimension"."productId"
WHERE "ProductRevenueFact"."businessId" = ${businessId}
GROUP BY "ProductDimension".name
ORDER BY total_revenue DESC
*/
const getProdcutsRevenues = async (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const businessId = req.user.businessId;
  const order = req.query.orderBy || "desc";

  try {
    const results = await dwhClient.productRevenueFact.groupBy({
      by: ["productId"],
      where: {
        businessId: businessId,
      },
      _sum: {
        revenueAmount: true,
      },
      orderBy: {
        _sum: {
          revenueAmount: order,
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const formattedResponse = await Promise.all(
      results.map(async (result) => {
        const product = await dwhClient.productDimension.findUnique({
          where: { productId: result.productId },
          select: { name: true },
        });
        return {
          name: product?.name || "Unknown",
          totalRevenue: result._sum.revenueAmount,
        };
      })
    );
    return res.status(200).json({
      data: formattedResponse,
    });
  } catch (ex) {
    next(ex);
  }
};

module.exports = getProdcutsRevenues;
