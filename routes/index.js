var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/quetip', function(req, res, next) {
  res.render('index', { title: 'here have a quetip' });
});
router.get('/manufacturer', function(req, res, next) {
  res.render('manufacturer_list', { title: "manufacturer list", manufacturer_list: [{Name: 'manufacturer 1'}, {Name: 'manufacturer 2'}] });
});
/*
do the rest of the forms and pages we need in the router/index
then work on their respctive views/page sections.
*/
module.exports = router;
