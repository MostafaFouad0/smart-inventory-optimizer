module.exports = function (err, req, res, next) {
  res.status(500).json({ message: "internal server error" });
};
