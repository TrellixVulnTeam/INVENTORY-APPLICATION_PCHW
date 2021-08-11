var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComputerPartSchema = new Schema({
 Name: { type: String, required: true, maxLength: 100 },
 Description: { type: String, required: true, maxLength: 400 },
 inStock: { type: Number, required: true },
 Price: { type: String, required: true, maxLength: 100 },
 Category: [{type: Schema.Types.ObjectId, ref: 'Category'}],
 Manufacturer: {type: Schema.Types.ObjectId, ref: 'Manufacturer', required: true},
});
/*
name
description
inStock
price
category
manufacturer
*/
ComputerPartSchema.virtual("url").get(function () {
  return "/catalog/computerparts/" + this._id;
});
module.exports = mongoose.model("ComputerPart", ComputerPartSchema);