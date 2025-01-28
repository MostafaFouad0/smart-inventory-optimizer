const winston = require('winston');
const prisma = require('../../prisma/prisma');

module.exports = async function () {
  try{
    await prisma.$connect();
    winston.info('Connected to PostgreSQL...');
  }catch(ex){
    winston.error('Could not connect to PostgreSQL', { error: ex.message });
  }
};