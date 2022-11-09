const model = require('../ConnectionMongo');


const createSupplies = async (email, name, password, grupo, suprimentos) => {
  console.log('chegou para criar');
  const supplies = await model.create({ email, name, password, grupo, suprimentos });
  console.log('depois de criar');

  return supplies;
};

module.exports = {
  createSupplies,
};
