const express = require("express");
const winston = require("winston");
const app = express();

require("./utils/rabbitMQ/rabbitmq");
require("./startup/logging")();
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);
global.rmq.connect();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
