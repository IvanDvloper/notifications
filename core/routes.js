var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller');

var {body} = require('express-validator');

var notificationValidator = [
    body('title').notEmpty(),
    body('content').notEmpty(),
    body('deep_link').notEmpty()
];

router.get('/home', indexController.index);

module.exports = router;