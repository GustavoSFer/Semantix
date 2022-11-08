const model = require('../Model/providerModel');

const createProvider = async (email, name, password, grupo, empresa, cnpj) => {
  const providerAdd = await model.createProvider(email, name, password, grupo, empresa, cnpj);

  return providerAdd;
};

module.exports = {
  createProvider,
};
