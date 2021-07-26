var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
do the rest of the forms and pages we need in the router/index
then work on their respctive views/page sections.
*/
module.exports = router;
