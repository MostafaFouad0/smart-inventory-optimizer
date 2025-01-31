const dashboardRouter = require("express").Router();
const { categoryRevenueController } = require("../controllers/categoryRevenue");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorizate");

dashboardRouter.get(
  "/category-revenue",
  [authenticate, authorize],
  categoryRevenueController
);

module.exports = dashboardRouter;
