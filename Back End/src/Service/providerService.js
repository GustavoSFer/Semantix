const model = require('../Model/providerModel');
const md5 = require('md5');
const schemaProvider = require('../Joi/schemaProvider');
const statusCodeError = require('../Joi/statusCodeError');

const createProvider = async (email, name, password, grupo, empresa, cnpj) => {
  try {
    await schemaProvider.validateAsync({ email, name, password, grupo, empresa, cnpj });
    const hashPassword = md5(password);
  
    const providerAdd = await model.createProvider(email, name, hashPassword, grupo, empresa, cnpj);
  
    return providerAdd;

  } catch(e) {
    const code = statusCodeError(e.details[0].type);
    return { code, message: e.details[0].message };
  }
};

module.exports = {
  createProvider,
};
