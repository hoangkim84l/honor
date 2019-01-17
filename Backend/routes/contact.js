
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var iphone = [
    {name: 'Iphone 6', price : '4 triệu'},
    {name: 'Iphone X', price : '24 triệu'},
    {name: 'Iphone XS Max', price : '34 triệu'},
  ];
    res.render('page/contact', { inraview: iphone });
});

module.exports = router;

