const express = require('express')
const shiftRoute = express.Router()
const shiftControllers = require('../controllers/shiftControllers')

shiftRoute.get('/getAllShift', shiftControllers.get_all_shift);
shiftRoute.get('/getDetailShift/:id', shiftControllers.get_detail_shift)
shiftRoute.post('/createShift', shiftControllers.create_shift);
shiftRoute.put('/updateShift/:id', shiftControllers.update_shift);
shiftRoute.delete('/deleteShift/:id', shiftControllers.delete_shift);
module.exports = shiftRoute
