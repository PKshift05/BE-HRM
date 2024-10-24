const express = require('express');
const router =  express.Router();
const controllers = require('../controllers/userControllers')


router.post('/login', controllers.login)

module.exports = router