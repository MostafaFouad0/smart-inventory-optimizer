const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorizate");
const getProductsStock = require("../controllers/productsStock");
router.get("/", [authenticate, authorize], getProductsStock);

module.exports = router;
