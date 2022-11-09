const service = require('../Service');

const login = async (req, res, next) => {
  const { email, password } = req.body
  console.log('chegamos no console', req.body);
  const user = await service.login(email, password);
  if (user.code) return next(user)

  return res.status(200).json(user);
};

const getAll = async (req, res) => {
  console.log('buscando todos');
  const users = await service.getAll();
  console.log('fndshfs', users);
  return res.status(200).json(users);
};

module.exports = {
  login,
  getAll,
}