var express = require('express');
var router = express.Router();
var notificationsController = require('./../../controllers/notifications.controller');
router.post('/custom', notificationsController.custom);

module.exports = router;