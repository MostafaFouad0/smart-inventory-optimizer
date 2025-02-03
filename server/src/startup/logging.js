const winston = require("winston");
const { combine, timestamp, printf, colorize, errors, json, prettyPrint } =
  winston.format;

// Custom log format for console output
const consoleFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

module.exports = function () {
  winston.configure({
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Add timestamp
      errors({ stack: true }), // Include stack traces for errors
      json(), // Default format for file logs
      prettyPrint() // Pretty-print JSON objects
    ),
    transports: [
      // Log errors to a file
      new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
      }),
      // Log debug and above to the console
      new winston.transports.Console({
        level: "debug",
        format: combine(
          colorize(), // Colorize console output
          timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Add timestamp
          consoleFormat // Use custom console format
        ),
      }),
    ],
  });

  // Handle uncaught exceptions
  winston.exceptions.handle(
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), consoleFormat),
    }),
    new winston.transports.File({ filename: "logs/uncaughtException.log" })
  );

  // Handle uncaught promise rejections
  winston.rejections.handle(
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), consoleFormat),
    }),
    new winston.transports.File({ filename: "logs/uncaughtRejection.log" })
  );
};
