var Manufacturer = require('../models/manufacturer');
var ComputerPart = require('../models/computerpart');
var async = require("async");
var mongoose = require("mongoose");

const { body, validationResult } = require("express-validator/check");
const { sanitizeBody, sanitize } = require("express-validator/filter");

// Display list of all Manufacturers.
exports.manufacturer_list = function (req, res, next) {
  Manufacturer.find().exec(function (err, list_manufacturers) {
    if (err) return next(err)

    res.render("Manufacturer_list", {
      title: "All Manufacturers",
      manufacturer_list: list_manufacturers,
    });
  });
};
// Display Manufacturere detail
exports.manufacturer_detail = function (req, res, next) {

  async.parallel({
        manufacturer: function(callback) {
            Manufacturer.findById(req.params.id)
              .exec(callback)
        },
        manufacturer_description: function(callback) {
          Manufacturer.findById(req.params.description)
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.manufacturer==null) { // No results.
            var err = new Error('Manufacturer not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('Manufacturer_detail', { title: 'Manufacturer Detail', manufacturer: results.manufacturer, manufacturer_description: results.manufacturer_description } );
    });
}
exports.manufacturer_create_get = function(req, res, next) {

  async.parallel({
    //dont know yet
  })
}