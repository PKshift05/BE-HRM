const express = require('express');
const scheduleRouter = express.Router();
const scheduleController = require('../controllers/workScheduleControllers')

scheduleRouter.post('/createWorkSchedule/:id', scheduleController.create_work_schedule);
scheduleRouter.put('/updateWorkSchedule', scheduleController.update_work_schedule)
scheduleRouter.delete('/deleteWorkSchedule/:id', scheduleController.delete_work_schedule)
scheduleRouter.get('/getWorkSchedule', scheduleController.get_work_schedule) //query

module.exports = scheduleRouter