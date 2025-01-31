const dwhClient = require("../../prisma/dwh/client");
const winston = require("winston");

const getProductsStock = async (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const bussinessId = req.user.businessId;
  try {
    const results = await dwhClient.inventoryFact.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        businessId: bussinessId,
        currentStock: {
          lte: 20,
        },
      },
      include: {
        product: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        currentStock: "asc",
      },
    });
    return res.status(200).json({
      data: results,
    });
  } catch (ex) {
    next(ex);
  }
};

module.exports = getProductsStock;
