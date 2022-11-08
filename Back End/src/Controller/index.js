const service = require('../Service');

const getAll = async (req, res) => {
  console.log('controller');
  const users = await service.getAll();

  return res.status(200).json(users);
}

module.exports = {
  getAll,
}