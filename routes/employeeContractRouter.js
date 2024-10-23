const express = require('express')
const contractRouter = express.Router();
const contractControllers = require('../controllers/contractControllers')

contractRouter.get('/getAllContract', contractControllers.getAllContract);
contractRouter.get('/getDetailContract/:id?', contractControllers.getDetailContract);
contractRouter.post('/createContract', contractControllers.createContract);
contractRouter.put('/updateContract', contractControllers.updateContract);

module.exports = contractRouter