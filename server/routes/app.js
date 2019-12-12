
var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'FINAL' });
  res.sendFile(path.join(__dirname, '../../dist/final/index.html'));
});

module.exports = router;


