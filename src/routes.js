const express = require('express');
const routes = express.Router();

const DashboardController = require('./controllers/DashboardController');
const SaleController = require('./controllers/SaleController');

routes.get('/', DashboardController.index);

routes.get('/sales', SaleController.search);
routes.get('/new-sale', SaleController.new);

routes.post('/new-sale', SaleController.insert);

module.exports = routes;