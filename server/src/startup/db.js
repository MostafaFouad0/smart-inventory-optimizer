const { PrismaClient } = require("../../prisma/generated/client/main/index.js");
const mainClient = new PrismaClient();

module.exports = mainClient;
