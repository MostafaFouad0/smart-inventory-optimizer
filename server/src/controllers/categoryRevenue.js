const dwhClient = require("../../prisma/dwh/client");

async function categoryRevenueController(req, res) {
  // TODO: check that the user sent this request is owner/staff in the business

  const businessId = req.params.businessId;

  try {
    const result = await dwhClient.categoryRevenueFact.groupBy({
      by: ["categoryId"],
      where: {
        businessId: businessId,
      },
      _sum: {
        revenueAmount: true,
      },
      orderBy: {
        _sum: {
          revenueAmount: "desc",
        },
      },
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { categoryRevenueController };
