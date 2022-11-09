const express = require('express');
const route = require('./Routes/user');
const error = require('./Middleware/error');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', route);
app.use(error);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

