var Manufacturer = require('../models/manufacturer');
var ComputerPart = require("../models/computerpart");
var async = require("async");
var mongoose = require("mongoose");

const { body, validationResult } = require("express-validator");
const { sanitizeBody, sanitize } = require("express-validator");

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
exports.manufacturer_create_get = function(req, res, next) {
  res.render("Manufacturer_form", {
    title: "Create a Manufacturer",
    isUpdating: false,
  });
}
// Handle Manufacturer create on POST.
exports.manufacturer_create_post = [
  body("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Manufacturer name must be specified"),
  body("description")
  .isLength({ min: 1, max: 100 })
  .optional({ checkFalsy: true }),

  sanitize("title").escape(),
  sanitize("description").escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("Manufacturer_form", {
        title: "Create a Manufacturer",
        category: req.body,
        isUpdating: false,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Create a Manufacturer object with escaped and trimmed data.
      var manufacturer = new Manufacturer({
        Name: req.body.title,
        Description: req.body.description,
      });
      manufacturer.save(function (err) {
        if (err) return next(err);
        res.redirect(manufacturer.url);
      });
    }
  },
];
// Display detail page for a specific Manufacturer.
exports.manufacturer_detail = function (req, res, next) {
  var id = mongoose.Types.ObjectId(req.params.id);

  async.parallel(
    {
      manufacturer: function(callback) {
            Manufacturer.findById(req.params.id)
              .exec(callback)
        },
        manufacturer_parts: function(callback) {
          ComputerPart.find({ 'manufacturer': req.params.id })
            .exec(callback);
        }
    }, function (err, results) {
      if (err) return next(err);
      if (results.manufacturer == null) {
        var err = new Error("Manufacturer not found");
        err.status = 404;
        return next(err);
      }
      res.render("Manufacturer_detail", {
        title: "Manufacturer Detail",
        _Manufacturer: results.manufacturer, Manufacturer_parts: results.manufacturer_parts 
      });
    }
  );
};
