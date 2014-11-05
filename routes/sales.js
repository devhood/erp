var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('sales/index');
});
router.get('/add', function(req, res) {
	  res.render('sales/add');
	});

module.exports = router;
