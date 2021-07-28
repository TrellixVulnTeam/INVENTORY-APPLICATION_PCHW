var express = require('express');
var router = express.Router();
var manufacturer_controller = require('../controllers/manufacturer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/quetip', function(req, res, next) {
  res.render('index', { title: 'here have a quetip' });
});
router.get('/manufacturer', function(req, res, next) {
  res.render('manufacturer_list', manufacturer_controller.manufacturer_list);
});
/*
do the rest of the forms and pages we need in the router/index
then work on their respctive views/page sections.
*/
module.exports = router;
