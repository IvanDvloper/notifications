var express = require('express');
var router = express.Router();
var notificationsController = require('./../../controllers/notifications.controller');

var {body} = require('express-validator');
var customNotificationValidator=[
    body('title').notEmpty(),
    body('content').notEmpty(),
    body('deep_link').notEmpty(),
    body('interest').notEmpty(),
]
router.post('/custom',customNotificationValidator, notificationsController.custom);

module.exports = router;