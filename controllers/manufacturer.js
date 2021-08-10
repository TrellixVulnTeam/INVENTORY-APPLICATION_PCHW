var Manufacturer = require('../models/manufacturer');
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
  body("name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Manufacturer name must be specified"),
  body("description").optional({ checkFalsy: true }),

  sanitize("name").escape(),
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