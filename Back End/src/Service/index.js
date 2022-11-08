const model = require('../Model');

const getAll = async () => {
  console.log('service');
  const users = await model.getAll();

  return users;
};

module.exports = {
  getAll,
};
