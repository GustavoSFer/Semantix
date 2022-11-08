const { Router } = require('express');
const controller = require('../Controller');
const provider = require('../Controller/providerController');

const route = Router();

route.get('/', controller.getAll);
route.post('/fornecedor', provider.createProvider);

module.exports = route;
