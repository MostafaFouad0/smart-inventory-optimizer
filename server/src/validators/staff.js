const Joi = require("joi");
const base = require("./userBase");

const staffSchema = Joi.object({
  name: base.name,
  email: base.email,
  username: base.username,
  password: base.password,
  phoneNumber: base.phoneNumber,
  isAdmin: base.isAdmin,
});

module.exports = staffSchema;
