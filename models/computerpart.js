var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComputerPartSchema = new Schema({
 Name: { type: String, required: true, maxLength: 100 },
 Description: { type: String, required: true, maxLength: 100 }
 Instock: {type: Boolean, required: true }
 Price: { type: String, required: true, maxLength: 100 },
 Category: [{type: Schema.Types.ObjectId, ref: 'Category'}]
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