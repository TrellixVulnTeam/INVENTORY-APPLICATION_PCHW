var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
 title: { type: string, required: true, maxLength: 100 },
 description: { type: string, required: true, maxLength: 100 }
});