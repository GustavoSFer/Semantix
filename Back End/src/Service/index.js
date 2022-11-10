const model = require('../Model');
const md5 = require('md5');

const login = async (email, password) => {
  const hashPassword = md5(password);
  const user = await model.login(email, hashPassword);
  if (user == null) return { code: 400, message: "user not exist" };
  delete user._doc.password;

  return user;
};

const getAll = async (email, password) => {
  const users = await model.getAll();

  return users;
};

module.exports = {
  login,
  getAll,
};
