var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManufacturerSchema = new Schema({
 Name: { type: String, required: true, maxLength: 100 },
 Description: { type: String, required: true, maxLength: 100 }
});
/*
name
description
*/
//Virtual for manufacturer's URL
ManufacturerSchema.virtual("url").get(function () {
  return "/manufacturer/" + this._id;
});

//Export model
module.exports = mongoose.model("Manufacturer", ManufacturerSchema);