const model = require('../ConnectionMongo');

const getAll = async () => {
  console.log('model');
  const users = await model.find();

  return users;
};

const createProvider = async (email, name, password, grupo, empresa, cnpj) => {
  const providerAdd = await model.create({ email, name, password, grupo, empresa, cnpj });

  return providerAdd;
};

module.exports = {
  getAll,
  createProvider,
};
