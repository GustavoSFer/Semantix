const service = require('../Service/cookerService');

const createCooker = async (req, res, next) => {
  const { email, name, password, grupo, cri } = req.body;
  console.log(req.body);
  const cooker = await service.createCooker(email, name, password, grupo, +cri);
  if (cooker.code) return next(cooker);
  
  return res.status(201).json(cooker);
};

module.exports = {
  createCooker,
}