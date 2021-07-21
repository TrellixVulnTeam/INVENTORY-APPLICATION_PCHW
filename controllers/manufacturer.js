var Manufacturer = require('../models/manufacturer');
var async = require('async');
const { body,validationResult } = require('express-validator');

exports.manufacturer_list = function(req, res, next) {
Manufacturer.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, manufacturer_list) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('manufacturer_list', { title: 'manufacturer List', manufacturer_list: list_manufacturers });
    });

};