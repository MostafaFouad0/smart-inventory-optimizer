const express = require("express");
const path = require("path");
const cors = require("cors");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load(path.join(__dirname, "../../swagger.yaml"));
const endpoints = require("../utils/endpoints");
const error = require("../middlewares/error");
const staff = require("../routes/staff");
const auth = require("../routes/auth");
const statisticsRouter = require("../routes/statistics");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(
    endpoints.API_DOCS,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  ); // for swagger documentation
  app.use(endpoints.STAFF, staff);
  app.use(endpoints.AUTH, auth);
  app.use(endpoints.STATISTICS, statisticsRouter);
  app.use(error); //make sure this is the last route always
};
