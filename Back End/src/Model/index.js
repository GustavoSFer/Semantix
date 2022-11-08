const model = require('../ConnectionMongo');

const getAll = async () => {
  console.log('model');
  const users = await model.find();

  return users;
};

module.exports = {
  getAll,
};
