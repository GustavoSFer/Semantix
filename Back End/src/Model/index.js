const model = require('../ConnectionMongo');

const login = async (email, password) => {
  const user = await model.findOne({ email, password });

  return user;
};

const getAll = async (email, password) => {
  const user = await model.find();

  return user;
};

module.exports = {
  login,
  getAll,
};
