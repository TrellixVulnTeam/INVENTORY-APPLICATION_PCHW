var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ComputerParts', function(req, res, next) {
  res.render('computerparts_list', { title: 'ComputerParts' });
});

module.exports = router;