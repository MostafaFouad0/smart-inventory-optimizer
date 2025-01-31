const dashboardRouter = require("express").Router();
const { categoryRevenueController } = require("../controllers/categoryRevenue");

dashboardRouter.get("/category-revenue/:businessId", categoryRevenueController);

module.exports = dashboardRouter;
