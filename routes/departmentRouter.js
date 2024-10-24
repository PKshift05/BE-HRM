const express = require('express')
const departmentRouter = express.Router()
const departmentController = require('../controllers/departmentControllers')

departmentRouter.get('/getAllDepartment', departmentController.getAllDepartment)
departmentRouter.get('/getDetailDepartment/:id?', departmentController.getDetailDepartment)

departmentRouter.put('/updateDepartment/:id?', departmentController.updateDepartment)

module.exports = departmentRouter
