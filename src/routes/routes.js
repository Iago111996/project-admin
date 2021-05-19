const express = require('express');

const routes = express.Router();

const User = require('../controllers/users.controller');
const Merchant = require('../controllers/merchants.controller');
const Request = require('../controllers/requests.controller');

routes.get('/', User.index);

//routes users
routes.post('/api/user', User.create);
routes.get('/api/user', User.index);
routes.get('/api/user.details/:_id', User.details);
routes.delete('/api/user/:_id', User.delete);
routes.put('/api/user', User.update);

//routes Merchants
routes.post('/api/merchant', Merchant.create);
routes.get('/api/merchant', Merchant.index);
routes.get('/api/merchant.details/:_id', Merchant.details);
routes.delete('/api/merchant/:_id', Merchant.delete);
routes.put('/api/merchant', Merchant.update);

//routes requests
routes.post('/api/request', Request.create);
routes.get('/api/request', Request.index);
routes.get('/api/request.details/:_id', Request.details);
routes.delete('/api/request/:_id', Request.delete);
routes.put('/api/request', Request.update);



module.exports = routes;
