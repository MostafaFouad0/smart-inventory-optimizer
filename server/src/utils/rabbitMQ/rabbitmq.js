const amqp = require("amqplib");
const winston = require("winston");

class RabbitMQ {
  constructor() {
    this.connection = null;
    this.channel = null;
    this.connectingPromise = null;
  }

  async connect() {
    if (this.connection && this.channel) {
      return { connection: this.connection, channel: this.channel };
    }

    /*
      connectingPromise is used to 
      prevent multiple concurrent connection attempts.
      and prevent race-conditions in the connection process.

      this solves the problem of creating multiple connections 
    */

    // If a connection is in progress, wait for it.
    if (this.connectingPromise) {
      await this.connectingPromise;
      return { connection: this.connection, channel: this.channel };
    }

    this.connectingPromise = (async () => {
      try {
        this.connection = await amqp.connect(process.env.RABBITMQ_URL);
        this.channel = await this.connection.createChannel();
        winston.info("Connected to RabbitMQ Server");
      } catch (ex) {
        winston.error("Failed to connect to RabbitMQ Server:", {
          error: ex.message,
        });
        throw ex;
      }
    })();

    try {
      await this.connectingPromise;
    } finally {
      // Once the connection is established or fails, clear the promise.
      this.connectingPromise = null;
    }

    return { connection: this.connection, channel: this.channel };
  }

  async close() {
    if (this.channel) {
      await this.channel.close();
    }
    if (this.connection) {
      await this.connection.close();
    }
    winston.info("RabbitMQ connection closed");
  }
}

const rabbitMQInstance = new RabbitMQ();
module.exports = rabbitMQInstance;
