const Joi = require('joi');

const schemaProvider = Joi.object({
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
  empresa: Joi.string().required().messages({
    'string.base': 'Empresa is need String',
    'any.required': 'Empresa is required',
  }),
  cnpj: Joi.string().required().messages({
    'string.base': 'CNPJ is need String',
    'any.required': 'CNPJ is required',
  }),
});

module.exports = schemaProvider;
