const Joi = require("joi");
//TODO: these constrains are arbitary so fix them
const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).required().messages({
    "string.base": "Password must be a valid string",
    "string.min": "Password must be at least 8 characters long",
    "any.required": "Password is required",
  }),
});

module.exports = resetPasswordSchema;
