const express = require('express');
const attendanceRouter = express.Router();
const attendanceController = require('../controllers/attendanceControllers')


attendanceRouter.get('/getWorkingHours',attendanceController.get_working_hours ) // query
attendanceRouter.post('/checkIn/:id', attendanceController.check_in);
attendanceRouter.post('/checkOut/:id', attendanceController.check_out);



module.exports = attendanceRouter