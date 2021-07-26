var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComputerPartSchema = new Schema({
 Name: { type: String, required: true, maxLength: 100 },
 Description: { type: String, required: true, maxLength: 100 }
});
/*
name
description
*/