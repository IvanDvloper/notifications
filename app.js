var routes = require('./core/routes');
var mongooseConnection = require('./mongoose/conection')
var notificationsManager = require('./core/notifications/notificationsManager');
var bodyParser = require('body-parser');

var express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const socketManager = require('./core/socket/socketManager');
const port = process.env.PORT || 3450;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



app.use(routes);

io.on('connection', socketManager.connection);

http.listen(port, () => {
    console.log("ok port: http://localhost:" + port);
})