const winston = require("winston");

module.exports = function (err, req, res, next) {
  winston.error(err);
  res.status(500).json({ message: "internal server error" });
};
