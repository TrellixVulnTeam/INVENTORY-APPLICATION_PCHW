var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/manufacturersList', function(req, res, next) {
  res.render('Manufacturer_list', { title: 'Manufacturer' });
});

module.exports = router;