const model = require('../ConnectionMongo');


const createSupplies = async (email, name, password, grupo, suprimentos) => {
  const supplies = await model.create({ email, name, password, grupo, suprimentos });

  return supplies;
};

module.exports = {
  createSupplies,
};
