const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorizate");
const getProdcutsRevenues = require("../controllers/productsRevenues");
router.get("/", [authenticate, authorize], getProdcutsRevenues);

module.exports = router;
