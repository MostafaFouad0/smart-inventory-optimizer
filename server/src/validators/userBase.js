const Joi = require("joi");

const username = Joi.string().alphanum().required();
const password = Joi.string().min(8).required();
const email = Joi.string().email().required();
const phoneNumber = Joi.string().pattern(/^[0-9]{10}$/);
const name = Joi.string().max(30);
const isAdmin = Joi.boolean();
module.exports = { username, password, email, phoneNumber, name, isAdmin };
