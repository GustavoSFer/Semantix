const Joi = require('joi');

const schemaSupplies = Joi.object({
  email: Joi.string().required().messages({
    'string.base': 'E-mail is need String',
    'any.required': 'E-mail is required',
  }),
  name: Joi.string().max(50).required().messages({
    'string.base': 'Name is need String',
    'any.required': 'Name is required',
  }),
  password: Joi.string().min(5).required().messages({
    'string.base': 'Password is need String',
    'any.required': 'Password is required',
  }),
  grupo: Joi.string().required().messages({
    'string.base': 'Grupo is need String',
    'any.required': 'Grupo is required',
  }),
  suprimentos: Joi.string().required().messages({
    'string.base': 'Suprimentos is need number',
    'any.required': 'Suprimentos is required',
  })
});

module.exports = schemaSupplies;
