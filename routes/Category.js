var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Category', function(req, res, next) {
  res.render('category_list', { title: 'Categories' });
});

module.exports = router;