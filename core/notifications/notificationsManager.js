const PushNotifications = require('@pusher/push-notifications-server');
var beamsClient = new PushNotifications({
    instanceId: '8db07c92-87d8-4bfc-a5e0-dc85589eb233',
    secretKey: 'F57032DCB05C8614021E16C5237A88F294BC7F3FD95C4B004072887E102D7B20'
});
var controller = {
    publicToInterestEthernetStatus: (logModel) => {
        beamsClient.publishToInterests(['ethernet-status'], {
            web: {
                notification: {
                    title: logModel.deviceName,
                    body: logModel.status ? "Connected" : "Disconnected",
                    deep_link: "http://google.com",
                }
            },
        });
    },

    publicNotificationCustom: (tittle, body, deep_ling, interest) => {

        beamsClient.publishToInterests([interest], {
            web: {
                notification: {
                    title: tittle,
                    body: body,
                    deep_link: "" + deep_ling,
                }
            },
        });
    }

};
module.exports = controller;