const model = require('../Model/cookerModel');
const md5 = require('md5');
const schemaCooker = require('../Joi/schemaCooker');
const statusCodeError = require('../Joi/statusCodeError');
const { generateToken } = require('../Token/token');

const createCooker = async (email, name, password, grupo, cri) => {
  try {
    await schemaCooker.validateAsync({ email, name, password, grupo, cri });
    const hashPassword = md5(password);
  
    const cooker = await model.createCooker(email, name, hashPassword, grupo, cri);
    
    const token = generateToken({ email, name, grupo, cri });
    delete cooker.password;
    return {...cooker._doc, token};

  } catch(e) {
    const code = statusCodeError(e.details[0].type);
    return { code, message: e.details[0].message };
  }
};

module.exports = {
  createCooker,
};
