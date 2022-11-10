const model = require('../ConnectionMongo');

const login = async (email) => {
  const user = await model.findOne({ email });

  return user;
};

const getAll = async (email, password) => {
  const user = await model.find();

  return user;
};


const getAllGrupo = async (grupo) => {
  const findAllSupplies = await model.find({ grupo });
  
  return findAllSupplies;
};

module.exports = {
  login,
  getAll,
  getAllGrupo,
};
