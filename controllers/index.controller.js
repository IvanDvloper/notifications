var LogModel = require('../mongoose/models/logModel');

var controller =
    {
        index: (req, res) => {
            LogModel.find({}).limit(20).sort({eventDate: -1}).exec((err, succ) => {
                if (err) {
                    res.status(404).json({"status": "error", "data": "no logs yet"});
                }
                if (succ) {

                    LogModel.findOne({"deviceName": succ[0].deviceName, "status": false}).exec((errOne, succOne) => {

                        var jsonWithData = {
                            "status": "ok"

                        };
                        if (succOne && succ[0].status === true) { //mostrar timepo de desconexion
                            var disconnectionOnSeconds = (succ[0].eventDate - succOne.eventDate);
                            var lastDeviceName = succOne.deviceName;

                            jsonWithData.last_device_disconnected =
                                {
                                    "device": lastDeviceName,
                                    "seconds": disconnectionOnSeconds
                                };
                            jsonWithData.logs = succ;
                            res.status(200).json(jsonWithData);

                        } else { //solo enviar logs
                            jsonWithData.logs = succ;
                            res.status(200).json(jsonWithData);
                        }


                    });
                }
            });

        }
    };
module.exports = controller;

