var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/logs', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Conectado a mongoose");
});
module.exports = connection;