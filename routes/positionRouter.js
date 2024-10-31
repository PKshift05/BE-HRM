const express = require('express')
const positionRouter = express.Router()
const positionController = require('../controllers/positionControllers')

positionRouter.get('/getAllPosition', positionController.getAllPosition)
positionRouter.get('/getDetailPosition/:id?', positionController.getDetailPosition)
positionRouter.post('/createPostion', positionController.createPosition)

module.exports = positionRouter