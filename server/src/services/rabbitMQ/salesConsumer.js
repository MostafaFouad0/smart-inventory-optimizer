const { createChannel } = require("./rabbitMQ");
const readCSV = require("../../utils/CSVParser");
const validateSales = require("../../validators/salesCSValidator");
const insertSalesTransaction = require("../maindb/insertSalesTransaction");
const changeStatus = require("../maindb/changeStatus");
const winston = require("winston");

const salesConsumer = async () => {
  let channel;
  try {
    channel = await createChannel();
    const queue = "sales";

    await channel.assertQueue(queue, { durable: true });
    winston.info("Sales consumer started successfully...");
    await channel.consume(
      queue,
      async (msg) => {
        if (msg !== null) {
          try {
            const message = JSON.parse(msg); //TODO check if this is correct
            await changeStatus(message.id, "Processing");
            const stream = await readCSV(message.bucketName, message.fileName);
            const data = await validateSales(stream, {
              //TODO: implement this function
              businessId: message.businessId, //TODO: do i need this?
            });
            if (data.badRows.length > 0) {
              await changeStatus(message.id, "Failed");
            } else {
              await insertSalesTransaction(data, message); //TODO: rethink the arguments and implementation
              await changeStatus(message.id, "Done");
            }
            channel.ack(msg);
          } catch (error) {
            winston.error("Error processing sales message:", error);
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
    winston.error("Error in sales consumer:", error);
  } finally {
    if (channel) await channel.close();
  }
};

module.exports = salesConsumer;
