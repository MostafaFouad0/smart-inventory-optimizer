const winston = require("winston");
const rmq = require("./rabbitmq");

const sendMessage = async (queue, message) => {
  try {
    const { channel } = await rmq.connect();

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

    winston.info(`Sent message to ${queue}:`, message);
  } catch (error) {
    winston.error("Error sending message to RabbitMQ:", error);
    throw error;
  }
};

module.exports = sendMessage;
