const amqp = require("amqplib");
const winston = require("winston");

class RabbitMQ {
  constructor() {
    this.connection = null;
    this.connectingPromise = null;
  }

  async connect() {
    this.connection = await amqp.connect(process.env.RABBITMQ_URL);
    winston.info("Connected to RabbitMQ Server");
  }

  async createChannel() {
    return await this.connection.createChannel();
  }
}

const rabbitMQInstance = new RabbitMQ();
global.rmq = rabbitMQInstance;
