var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComputerPartSchema = new Schema({
 Name: { type: string, required: true, maxLength: 100 },
 Description: { type: string, required: true, maxLength: 100 }
 Instock: {type: boolean, required: true }
 Price: { type: string, required: true, maxLength: 100 },
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