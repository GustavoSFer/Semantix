const service = require('../Service/providerService');

const createProvider = async (req, res) => {
  const { email, name, password, grupo, empresa, cnpj } = req.body;

  const providerAdd = await service.createProvider(email, name, password, grupo, empresa, cnpj);
  
  return res.status(201).json(providerAdd);
};

module.exports = {
  createProvider,
}