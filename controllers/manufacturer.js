var Manufacturer = require('../models/manufacturer');
var async = require("async");
var mongoose = require("mongoose");
const { body, validationResult } = require("express-validator/check");

//this piece of code is causing issues to not render the view
// Display list of all Manufacturers.
exports.manufacturer_list = function (req, res, next) {
  
  Manufacturer.find()
    .sort([['Name', 'ascending']])
    .exec(function (err, list_manufacturers) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('manufacturer_list', { title: 'Author List', manufacturer_list: list_manufacturers });
    });

};