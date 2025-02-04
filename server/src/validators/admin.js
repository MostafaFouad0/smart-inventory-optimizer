const Joi = require("joi");
const base = require("./userBase");

const adminSchema = Joi.object({
  name: base.name,
  email: base.email,
  username: base.username,
  password: base.password,
  phoneNumber: base.phoneNumber,
  isAdmin: base.isAdmin,
});

module.exports = adminSchema;
