var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    maxOfficersId: {type: Number},
    maxOfficerId: {type: Number}
});

module.exports = mongoose.model('Sequence', schema);