const joi = require("joi");

const productSchema = joi.object({
  name: joi.string().required(),
  hasExpirationDate: joi.boolean().required(),
  categoryId: joi.number(),
});

module.exports = productSchema;
