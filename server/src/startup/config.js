require("dotenv").config();

module.exports = function () {
  if (!process.env.JWT_SECRET) throw new Error("JWT Key is not defined");
  if (!process.env.MAIN_DB_URL)
    throw new Error("Main database connection string is not defined");
  if (!process.env.MAIN_DB_DIRECT_URL)
    throw new Error("Main database direct URL is not defined");
  if (!process.env.DWH_URL)
    throw new Error("Data warehouse connection string is not defined");
  if (!process.env.DWH_DIRECT_URL)
    throw new Error("Data warehouse direct URL is not defined");
  if (!process.env.BUCKET_URL) throw new Error("Bucket URL is not defined");
  if (!process.env.BUCKET_KEY) throw new Error("Bucket key is not defined");
  if (!process.env.RABBITMQ_URL)
    throw new Error("RabbitMQ connection string is not defined");
};
