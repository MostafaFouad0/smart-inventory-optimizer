const winston = require("winston");
const fs = require("fs");
const path = require("path");
const { combine, timestamp, printf, colorize, errors, json, prettyPrint } =
  winston.format;

const logDir = path.join(__dirname, "../../logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const consoleFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

module.exports = function () {
  winston.configure({
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      json(),
      prettyPrint()
    ),
    transports: [
      new winston.transports.File({
        filename: path.join(logDir, "error.log"),
        level: "error",
      }),
      new winston.transports.Console({
        level: "debug",
        format: combine(
          colorize(), // Colorize console output
          timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
          consoleFormat
        ),
      }),
    ],
  });

  winston.exceptions.handle(
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), consoleFormat),
    }),
    new winston.transports.File({
      filename: path.join(logDir, "uncaughtException.log"),
    })
  );

  winston.rejections.handle(
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), consoleFormat),
    }),
    new winston.transports.File({
      filename: path.join(logDir, "uncaughtRejection.log"),
    })
  );
};
