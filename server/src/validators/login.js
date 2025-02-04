const Joi = require('joi');
//TODO: these constrains are arbitary so fix them
const loginSchema = Joi.object({
  username:Joi.string().required(),
  password: Joi.string().min(8).required(),
});

module.exports = loginSchema;
