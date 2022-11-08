const service = require('../Service');

const getAll = async (req, res) => {
  console.log('controller');
  const users = await service.getAll();

  return res.status(200).json(users);
};

const createProvider = async (req, res) => {
  const { email, name, password, grupo, empresa, cnpj } = req.body;

  const providerAdd = await service.createProvider(email, name, password, grupo, empresa, cnpj);
  
  return res.status(201).json(providerAdd);
};

module.exports = {
  getAll,
  createProvider,
}