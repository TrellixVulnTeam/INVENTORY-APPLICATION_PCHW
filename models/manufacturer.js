var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComputerPartSchema = new Schema({
 Name: { type: string, required: true, maxLength: 100 },
 Description: { type: string, required: true, maxLength: 100 }
});
/*
name
description
*/