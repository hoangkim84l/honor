var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/user.controller');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testnodejs";
//test router user
router.get('/', function(req, res, next) {
  //Find all documents in the customers collection:
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testnodejs");
    //Find all documents in the customers collection:
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.render('page/user/index',{result: result});
      db.close();
    });
  });  
});
//test
router.get('/test', user_controller.test);
//thêm user mới
router.post("/user_create", user_controller.user_create);

module.exports = router;
