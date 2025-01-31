const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const resetPasswordController = require("../controllers/resetPassword");

router.post("/", [authenticate], resetPasswordController.resetPassword);

module.exports = router;
