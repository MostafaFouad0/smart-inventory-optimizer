const winston = require("winston");
const mainClient = require("../../prisma/main/client");
const dwhClient = require("../../prisma/dwh/client");

module.exports = async function () {
  try {
    await mainClient.$connect();
    winston.info("The main database is connected successfully...");
  } catch (ex) {
    winston.error("Could not connect to the main database", {
      error: ex.message,
    });
  }

  try {
    await dwhClient.$connect();
    winston.info("The data warehouse is connected successfully...");
  } catch (ex) {
    winston.error("Could not connect to the data warehouse", {
      error: ex.message,
    });
  }
};
