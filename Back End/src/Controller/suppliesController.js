const service = require('../Service/suppliesService');

const createSupplies = async (req, res, next) => {
  const { email, name, password, grupo, suprimentos } = req.body;

  const supllies = await service.createSupplies(email, name, password, grupo, suprimentos);
  if (supllies.code) return next(supllies);
  
  return res.status(201).json(supllies);
};

module.exports = {
  createSupplies,
}