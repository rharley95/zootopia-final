var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String, required: true},
    name: {type: String},
    description: {type: String},
    email: {type: String},
    phone: {type: String},
    img: {type: String},

});

module.exports = mongoose.model('Officer', schema);