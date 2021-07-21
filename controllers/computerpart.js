var Category = require("../models/category");
var ComputerPart = require("../models/computerpart");
var async = require("async");

const { body, validationResult } = require("express-validator/check");
const { sanitizeBody, sanitize } = require("express-validator/filter");

var mongoose = require("mongoose");

// Display list of all Categorys.
exports.computerparts_list = function (req, res, next) {
  Category.find().exec(function (err, list_categories) {
    if (err) return next(err);

    res.render("computerparts_list", {
      title: "All computerpart",
      category_list: list_categories,
    });
  });
};

// Display detail page for a specific Category.
exports.computerparts_detail = function (req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    let err = new Error("Invalid ObjectID");
    err.status = 404;
    return next(err);
  }
  async.parallel(
    {
      ComputerPart: function (callback) {
        Category.findById(req.params.id).exec(callback);
      },
      Manufacturer: function (callback) {
        ComputerPart.find({ category: req.params.id })
          .populate("category")
          .populate("manufacturer")
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      if (results.category == null) {
        var err = new Error("Category not found");
        err.status = 404;
        return next(err);
      }
      res.render("computerparts_detail", {
        title: "Choose " + results.category.title + " - PCPartPlanner",
        category: results.category,
        category_parts: results.category_parts,
      });
    }
  );
};

// Display Category create form on GET.
exports.computerparts_create_get = function (req, res, next) {
  res.render("computerparts_form", {
    title: "Create a Part",
    isUpdating: false,
  });
};
//t
// Handle Category create on POST.
exports.computerpart_create_post = [
  body("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Category name must be specified"),
  body("description").optional({ checkFalsy: true }),

  sanitize("title").escape(),
  sanitize("description").escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("category_form", {
        title: "Create a category",
        category: req.body,
        isUpdating: false,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Create a ComputerPart object with escaped and trimmed data.
      var category = new Category({
        title: req.body.title,
        description: req.body.description,
      });
      category.save(function (err) {
        if (err) return next(err);
        res.redirect(category.url);
      });
    }
  },
];

// Display ComputerPart delete form on GET.
exports.ComputerParts_delete_get = function (req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    let err = new Error("Invalid ObjectID");
    err.status = 404;
    return next(err);
  }
  async.parallel(
    {
      Part: function (callback) {
        Category.findById(req.params.id).exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);

      if (results.Part == null) {
        let err = new Error("Part not found");
        err.status = 404;
        return next(err);
      }

      res.render("ComputerPart_delete", {
        title: "Delete ComputerPart: " + results.ComputerPart.title,
        ComputerPart: results.ComputerPart,
      });
    }
  );
};

// Handle ComputerPart delete on POST.
exports.ComputerPart_delete_post = function (req, res, next) {
  if (req.body.password != process.env.ADMIN_PASSWORD) {
    let err = new Error("The password you entered is incorrect.");
    err.status = 401;
    return next(err);
  } else {
    async.parallel(
      {
        ComputerPart: function (callback) {
          ComputerPart.findById(req.params.id).exec(callback);
        },
      },
      function (err, results) {
        if (err) return next(err);

        if (results.category_parts.length > 0) {
          res.render("ComputerPart_delete", {
            title: "Delete ComputerPart: " + results.ComputerPart.title,
            ComputerPart: results.ComputerPart,
          });
          return;
          res.redirect("/computerparts_list");
        }      
      }
    );
  }
};

// Display ComputerPart update form on GET.
exports.ComputerPart_update_get = function (req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    let err = new Error("Invalid ObjectID");
    err.status = 404;
    return next(err);
  }
  ComputerPart.findById(req.params.id, function (err, part) {
    if (err) return next(err);

    if (part == null) {
      var err = new Error("ComputerPart not found");
      err.status = 404;
      return next(err);
    }
    //Success
    res.render("category_form", {
      title: "Update ComputerPart",
      part: part,
      isUpdating: true,
    });
  });
};

// Handle ComputerPart update on POST.
exports.ComputerPart_update_post = [
  body("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("ComputerPart name must be specified"),
  body("description").optional({ checkFalsy: true }),

  (req, res, next) => {
    if (req.body.password != process.env.ADMIN_PASSWORD) {
      let err = new Error("The password you entered is incorrect.");
      err.status = 401;
      return next(err);
    } else {
      const errors = validationResult(req);

      var  part = new ComputerPart({
        title: req.body.title,
        description: req.body.description,
        _id: req.params.id,
      });

      if (!errors.isEmpty()) {
        res.render("computerparts_form", {
          title: "Update ComputerPart",
          part: part,
          isUpdating: true,
          errors: errors.array(),
        });
        return;
      } else {
        ComputerPart.findByIdAndUpdate(
          req.params.id,
          part,
          {},
          function (err, thepart) {
            if (err) return next(err);

            res.redirect(thepart.url);
          }
        );
      }
    }
  },
];