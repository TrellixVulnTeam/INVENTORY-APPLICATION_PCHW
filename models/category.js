var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
 title: { type: String, required: true, maxLength: 100 },
 description: { type: String, required: true, maxLength: 100 }
});