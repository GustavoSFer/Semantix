const { Router } = require('express');
const controller = require('../Controller');
const provider = require('../Controller/providerController');
const cooker = require('../Controller/cookerController');
const supplies = require('../Controller/suppliesController');

const route = Router();

route.get('/', controller.getAll);
route.post('/loginUser', controller.login);
route.post('/provider', provider.createProvider);
route.post('/cooker', cooker.createCooker);
route.post('/supplies', supplies.createSupplies);
route.get('/user/:grupo', controller.getAllGrupo);

module.exports = route;
