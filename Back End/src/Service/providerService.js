const model = require('../Model/providerModel');
const schemaProvider = require('../Joi/schemaProvider');

const createProvider = async (email, name, password, grupo, empresa, cnpj) => {

  await schemaProvider.validateAsync({ email, name, password, grupo, empresa, cnpj });
  const providerAdd = await model.createProvider(email, name, password, grupo, empresa, cnpj);

  return providerAdd;
};

module.exports = {
  createProvider,
};
