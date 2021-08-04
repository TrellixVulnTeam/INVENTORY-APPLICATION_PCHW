var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
 title: { type: String, required: true, maxLength: 1000 },
 description: { type: String, required: true, maxLength: 1000 }
});

module.exports = mongoose.model('Category', CategorySchema);