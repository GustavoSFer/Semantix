const service = require('../Service');

const login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await service.login(email, password);
  if (user.code) return next(user)

  return res.status(200).json(user);
};

const getAll = async (req, res) => {
  const users = await service.getAll();
  return res.status(200).json(users);
};

const getAllGrupo = async (req, res) => {
  const { grupo } = req.params;
  const findAllGrupo = await service.getAllGrupo(grupo);

  return res.status(200).json(findAllGrupo)
};

module.exports = {
  login,
  getAll,
  getAllGrupo,
}