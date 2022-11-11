const model = require('../Model/suppliesModel');
const md5 = require('md5');
const schemaSupplies = require('../Joi/schemaSupplies');
const statusCodeError = require('../Joi/statusCodeError');
const { generateToken } = require('../Token/token');

const createSupplies = async (email, name, password, grupo, suprimentos) => {
  try {
    await schemaSupplies.validateAsync({ email, name, password, grupo, suprimentos });
    const hashPassword = md5(password);
    
    const transformingToArray = suprimentos.split(' ');
    const supplies = await model.createSupplies(email, name, hashPassword, grupo, transformingToArray);
    
    const token = generateToken({ email, name, grupo });
    delete supplies._doc.password;
    return {...supplies._doc, token};

  } catch(e) {
    const code = statusCodeError(e.details[0].type);
    return { code, message: e.details[0].message };
  }
};

module.exports = {
  createSupplies,
};
