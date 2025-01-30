const { PrismaClient } = require("@prisma/client/main/index.js");
const mainClient = new PrismaClient();

module.exports = mainClient;
