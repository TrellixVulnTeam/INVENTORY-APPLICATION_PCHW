var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Categories Page page. */
router.get('/Category', function(req, res, next) {
  res.render('category_list', { title: 'Categories' });
});
/* GET ComputerParts List page. */
router.get('/ComputerParts', function(req, res, next) {
  res.render('computerparts_list', { title: 'ComputerParts List' });
});
/* GET ComputerParts Details page. */
router.get('/ComputerParts-Detail', function(req, res, next) {
  res.render('computerparts_Detail', { title: 'ComputerParts' });
}); 
router.get('/manufacturersList', function(req, res, next) {
  res.render('Manufacturer_list', { title: 'Manufacturer' });
});
module.exports = router;
