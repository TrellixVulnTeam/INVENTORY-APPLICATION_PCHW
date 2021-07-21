var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Categories Page page. */
router.get('/Categories', function(req, res, next) {
  res.render('category_list', { title: 'Categories' });
});
/* GET ComputerParts List page. */
router.get('/ComputerParts', function(req, res, next) {
  res.render('computerparts_list', { title: 'ComputerParts List' });
});
router.get('/ComputerParts', function(req, res, next) {
  res.render('computerparts_list', { title: 'ComputerParts List' });
});
/* GET ComputerParts Details page. */
router.get('/ComputerParts-Detail', function(req, res, next) {
  res.render('computerparts_Detail', { title: 'ComputerParts' });
}); 
router.get('/manufacturers-List', function(req, res, next) {
  res.render('Manufacturer_list', { title: 'Manufacturer List', manufacturer_list });
});
router.get('/manufacturers-Detail', function(req, res, next) {
  res.render('Manufacturer_Detail', { title: 'Manufacturer Detail' });
});
/*
do the rest of the forms and pages we need in the router/index
then work on their respctive views/page sections.
*/
module.exports = router;
