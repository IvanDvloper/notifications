var notificationsManager = require('../notifications/notificationsManager');
var LogModel = require('./../../mongoose/models/logModel');

var socketManager = {

    connection: (socket) => {
        const socketId = socket.id;
        var name;
        console.log("Alguien está en socket,su socket ID:" + socketId);

        socket.on('online', (data) => {
            name=data;
            var time = Math.floor(Date.now() / 1000);
            var logModel = new LogModel();
            logModel.deviceName = data;
            logModel.eventDate = time;
            logModel.status = true;


            logModel.save((err) => {
                if (err) {
                    console.log("Error to save log:" + err);
                }
                console.log(logModel.deviceName + " registrado");
                notificationsManager.publicToInterestEthernetStatus(logModel);

            })

        });

        socket.on('disconnect', () => {
            var time = Math.floor(Date.now() / 1000);
            var logModel = new LogModel();
            logModel.deviceName = name;
            logModel.eventDate = time;
            logModel.status = false;

            logModel.save((err) => {
                if (err) {
                    console.log("Error to save log:" + err);
                }
                console.log(logModel.deviceName + " desconectado");
                notificationsManager.publicToInterestEthernetStatus(logModel);

            })

        });


    }
};
module.exports = socketManager;