var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
 Name: { type: String, required: true, maxLength: 1000 },
 Description: { type: String, required: true, maxLength: 1000 }
});

module.exports = mongoose.model('Category', CategorySchema);