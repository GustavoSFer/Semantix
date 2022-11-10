const model = require('../Model');
const md5 = require('md5');
const { generateToken } = require('../Token/token');

const login = async (email, password) => {
  const hashPassword = md5(password);
  const user = await model.login(email);
  if (user == null) return { code: 404, message: "user not exist" };

  if (user.password !== hashPassword) {
    return { code: 404, message: "Incorrect E-mail or password" };
  };

  delete user._doc.password;
  const token = generateToken({ user });

  return { ...user._doc, token};
};

const getAll = async (email, password) => {
  const users = await model.getAll();

  return users;
};


const getAllGrupo = async (grupo) => {
  const findAllGrupo = await model.getAllGrupo(grupo);

  return findAllGrupo;
};

module.exports = {
  login,
  getAll,
  getAllGrupo,
};
