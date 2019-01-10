var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('DUY');
  var iphone = [
    {name: 'Iphone 6', price : '4 triệu'},
    {name: 'Iphone X', price : '24 triệu'},
    {name: 'Iphone XS Max', price : '34 triệu'},
  ];
    res.render('page/topic/list', { inraview: iphone });
});

router.post('/add', function(req, res, next){
    var myData = new Topic(req.body);
    
    var topic =  new mongoose.Schema({
        title : req.body.title,
        content : req.body.content,
        status : req.body.status,
    });
    console.log(topic);
    res.render('page/topic/list', {
        topicValue : topic,
        topicHeader : 'Danh sách topic',
    });
});
module.exports = router;

