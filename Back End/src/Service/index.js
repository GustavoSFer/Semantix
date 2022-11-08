const model = require('../Model');

const getAll = async () => {
  console.log('service');
  const users = await model.getAll();

  return users;
};

const createProvider = async (email, name, password, grupo, empresa, cnpj) => {
  const providerAdd = await model.createProvider(email, name, password, grupo, empresa, cnpj);

  return providerAdd;
};

module.exports = {
  getAll,
  createProvider,
};
