const express = require('express');
const route = require('./Routes/user');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use('/users', route);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

