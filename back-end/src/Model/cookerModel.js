const model = require('../ConnectionMongo');


const createCooker = async (email, name, password, grupo, cri) => {
  const cooker = await model.create({ email, name, password, grupo, cri });

  return cooker;
};

module.exports = {
  createCooker,
};
