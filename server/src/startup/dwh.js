const { PrismaClient } = require("../../prisma/generated/client/dwh/index.js");
const dwhClient = new PrismaClient();

module.exports = dwhClient;
