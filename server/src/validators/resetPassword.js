const Joi = require("joi");
const base = require("./userBase");

const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).required().messages({
    "string.base": "Password must be a valid string",
    "string.min": "Password must be at least 8 characters long",
    "any.required": "Password is required",
  }),
});

module.exports = resetPasswordSchema;
