var express = require('express');
var router = express.Router();
var manufacturer_controller = require('../controllers/manufacturer');
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});
/* GET home page. */

/*
do the rest of the forms and pages we need in the router/index
then work on their respctive views/page sections.
*/
module.exports = router;