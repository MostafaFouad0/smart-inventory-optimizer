const express = require("express");
const endpoints = require("../utils/endpoints");
const error = require("../middlewares/error");
const admin = require("../routes/admin");
const staff = require("../routes/staff");
const productsRevenues = require("../routes/productsRevenues");
const productsStock = require("../routes/productsStock");
const dashboardRouter = require("../routes/dashboard");

module.exports = function (app) {
  app.use(express.json());
  app.use(endpoints.ADMIN, admin);
  app.use(endpoints.STAFF, staff);
  app.use(endpoints.PRODUCTS_REVENUES, productsRevenues);
  app.use(endpoints.DASHBOARD, dashboardRouter);
  app.use(endpoints.PRODUCTS_STOCK, productsStock);
  app.use(error); //make sure this is the last route always
};
