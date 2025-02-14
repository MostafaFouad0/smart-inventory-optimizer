const express = require("express");
const winston = require("winston");
const app = express();

require("./startup/logging")();
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);
require("./services/rabbitMQ/rabbitMQ").getConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
