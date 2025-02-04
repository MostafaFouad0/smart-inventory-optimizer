const express = require("express");
const cors = require("cors");
const endpoints = require("../utils/endpoints");
const error = require("../middlewares/error");
const admin = require("../routes/admin");
const staff = require("../routes/staff");
const auth = require("../routes/auth");
const statisticsRouter = require("../routes/statistics");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(endpoints.ADMIN, admin);
  app.use(endpoints.STAFF, staff);
  app.use(endpoints.AUTH, auth);
  app.use(endpoints.STATISTICS, statisticsRouter);
  app.use(error); //make sure this is the last route always
};
