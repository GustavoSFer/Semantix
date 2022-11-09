const model = require('../ConnectionMongo');

const login = async (email, password) => {
  const user = await model.findOne({ email, password });

  return user;
};

module.exports = {
  login,
};
