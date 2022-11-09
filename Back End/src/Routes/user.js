const { Router } = require('express');
const controller = require('../Controller');
const provider = require('../Controller/providerController');
const cooker = require('../Controller/cookerController');

const route = Router();

route.get('/', controller.getAll);
route.post('/fornecedor', provider.createProvider);
route.post('/cooker', cooker.createCooker);

module.exports = route;
