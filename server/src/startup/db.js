const prisma = require('../../prisma/prisma');

module.exports = async function () {
  await prisma.$connect();
  console.log('Connected to PostgreSQL...');
};