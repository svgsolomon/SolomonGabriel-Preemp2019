const Joi = require("joi");
const getProductByIDPROD = Joi.object().keys({
  id: Joi.number().integer()
});
module.exports = { getProductByIDPROD };
