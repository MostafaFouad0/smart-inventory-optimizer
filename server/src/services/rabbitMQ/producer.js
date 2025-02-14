const winston = require("winston");
const { createChannel } = require("./rabbitMQ");

const sendMessage = async (queue, message) => {
  try {
    const channel = await createChannel();

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    await channel.close();
    if (process.env.NODE_ENV === "development") {
      winston.debug(`Sent message to ${queue}:`, message);
    }
  } catch (error) {
    winston.error("Error sending message to RabbitMQ:", error);
  }
};

module.exports = sendMessage;
