const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const loginController = require("../controllers/login");
const forgetPasswordController = require("../controllers/forgetPassword");
const resetPasswordController = require("../controllers/resetPassword");
const adminController = require("../controllers/registerAdmin");

router.post("/login", loginController.login);
router.post("/forget-password", forgetPasswordController.forgetPassword);
router.post(
  "/reset-password",
  [authenticate],
  resetPasswordController.resetPassword
);
router.post("/register", adminController.createAdmin);

module.exports = router;
