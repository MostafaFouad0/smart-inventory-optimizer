const Joi = require("joi");
const base = require("./userBase");

const loginSchema = Joi.object({
  username: base.username,
  password: base.password,
});

module.exports = loginSchema;
