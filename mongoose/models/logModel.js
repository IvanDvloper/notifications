var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LogModel = new Schema({
    deviceName: {type: String},
    status: {type: Boolean},
    eventDate: {type: Number, default: Math.floor(Date.now() / 1000)}
});
var SchemaModel = mongoose.model('logs', LogModel);
module.exports = SchemaModel;