var {validationResult} = require('express-validator');
var notificationManager = require('./../core/notifications/notificationsManager');
var controller =
    {
        custom: (req, res) => {
            console.log(req.body);

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({status: "error", data: errors.array()});
            }
            var title = req.body.title;
            var content = req.body.content;
            var deep_link = req.body.deep_link;
            var interest =req.body.interest;
            notificationManager.publicNotificationCustom(title, content, deep_link,interest);
            return res.status(200).json({"status": "ok", "data": "notification ok"});
        }
    };
module.exports = controller;