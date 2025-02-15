const { createChannel } = require("./rabbitMQ");
const readCSV = require("../../utils/CSVParser");
const validatePurchases = require("../../validators/purchasesCSValidator");
const insertBatchTransactions = require("../maindb/insertBatchTransactions");
const client = require("../../../prisma/main/client");
const changeStatus = require("../maindb/changeStatus");
const winston = require("winston");

const purchasesConsumer = async () => {
  let channel;
  try {
    channel = await createChannel();
    const queue = "purchases";

    await channel.assertQueue(queue, { durable: true });
    winston.info("Purchases consumer started successfully...");
    await channel.consume(
      queue,
      async (msg) => {
        if (msg !== null) {
          try {
            const message = JSON.parse(msg);
            changeStatus(message.id, "Processing");
            const stream = await readCSV(message.bucketName, message.fileName);
            const data = await validatePurchases(stream, {
              businessId: message.businessId,
            });
            if (data.badRows.length > 0) {
              await changeStatus(message.id, "Failed");
            } else {
              await insertBatchTransactions(data, message);
              await changeStatus(message.id, "Done");
            }
            channel.ack(msg);
          } catch (error) {
            winston.error("Error processing message:", error);
            await changeStatus(message.id, "Failed");
            channel.nack(msg, false, false);
          }
        }
      },
      {
        noAck: false,
      }
    );
  } catch (error) {
    winston.error("Error in purchases consumer:", error);
  }finally {
    if (channel) await channel.close();
  }
};

module.exports = purchasesConsumer;
