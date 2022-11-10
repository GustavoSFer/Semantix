const mongoose = require('mongoose');
require('dotenv').config();


const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/semantix';
mongoose.connect(dbURI);


const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  grupo: { type: String, required: true },
  fornecedor: { type: String, required: false },
  empresa: { type: String, required: false },
  cnpj: { type: String, required: false },
  cozinheiro: { type: String, required: false },
  cri: { type: Number, required: false },
  suprimentos: { type: Array, required: false },
})

const model = mongoose.model('Semantix', schema);

module.exports = model;