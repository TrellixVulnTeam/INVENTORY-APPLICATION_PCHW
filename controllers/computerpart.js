var Category = require("../models/category");
var ComputerPart = require("../models/computerpart");
var async = require("async");

const { body, validationResult } = require("express-validator/check");
const { sanitizeBody, sanitize } = require("express-validator/filter");

// Display list of all ComputerParts.
exports.computerpart_list = function (req, res, next) {
  ComputerPart.find()
    .populate("manufacturer")
    .populate("category")
    .exec(function (err, list_computerparts) {
      if (err) next(err);

      res.render("computerpart_list", { title: "All Computer Parts", component_list: list_computerparts, });
    });
};