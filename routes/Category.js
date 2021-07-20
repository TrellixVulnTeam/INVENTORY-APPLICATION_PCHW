var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Category.js', function(req, res, next) {
  res.render('Category', { title: 'Categories' });
});

module.exports = router;