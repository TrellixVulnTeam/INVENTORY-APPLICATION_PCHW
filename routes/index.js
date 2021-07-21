var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/categories', function(req, res, next) {
  res.render('categories', { title: 'categories' });
});
router.get('/manufacturersList', function(req, res, next) {
  res.render('Manufacturer_list', { title: 'Manufacturer' });
});
module.exports = router;
