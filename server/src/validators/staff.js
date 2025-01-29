const Joi = require('joi');
//TODO: these constrains are arbitary so fix them
const staffSchema = Joi.object({
  name: Joi.string().max(30),
  email: Joi.string().email().required(),
  username:Joi.string().required(),
  password: Joi.string().min(8).required(),
  phoneNumber:Joi.string(),
  isAdmin: Joi.boolean()
});

module.exports = staffSchema;
