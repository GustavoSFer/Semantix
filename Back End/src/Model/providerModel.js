const model = require('../ConnectionMongo');


const createProvider = async (email, name, password, grupo, empresa, cnpj) => {
  const providerAdd = await model.create({ email, name, password, grupo, empresa, cnpj });

  return providerAdd;
};

module.exports = {
  createProvider,
};
