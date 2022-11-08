const model = require('../Model/providerModel');
const md5 = require('md5');
const schemaProvider = require('../Joi/schemaProvider');

const createProvider = async (email, name, password, grupo, empresa, cnpj) => {

  await schemaProvider.validateAsync({ email, name, password, grupo, empresa, cnpj });
  const hashPassword = md5(password);

  const providerAdd = await model.createProvider(email, name, hashPassword, grupo, empresa, cnpj);

  return providerAdd;
};

module.exports = {
  createProvider,
};
