const amqp = require("amqplib");
let connection = null;

const getConnection = async () => {
  connection = connection || (await amqp.connect(process.env.RABBITMQ_URL));
  return connection;
};

const createChannel = async () => {
  return await connection.createChannel();
};

module.exports = { getConnection, createChannel };
