const express = require('express')
const employeeRouter = express.Router();
const employeeControllers = require('../controllers/employeeControllers')

employeeRouter.get('/getAllEmployee', employeeControllers.getAllEmployee)
employeeRouter.get('/getDetailEmployee/:id?',employeeControllers.getDetailEmployee)
employeeRouter.get('/searchEmployee/:string?', employeeControllers.searchEmployee)
employeeRouter.post('/addEmployee', employeeControllers.addEmployee)
employeeRouter.put('/updateEmployee/:id?',employeeControllers.updateEmploy)




module.exports = employeeRouter