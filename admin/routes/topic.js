var express = require('express');
var router = express.Router();

const topic_controller = require('../controllers/topic.controller');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testnodejs";

/* GET index topic page. */
router.get('/', function(req, res, next) {
  //Find all documents in the customers collection:
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testnodejs");

    //Find all documents in the topic collection:
    dbo.collection("topic").find({}).toArray(function(err, result) {
      //Find all documents in the user collection:
      dbo.collection("users").find({}).toArray(function(errs, results) {
      if (errs) throw err;
      
      if (err) throw err;
      res.render('page/topic/list',{
                                    result: result,
                                    results: results
                                });
      db.close();
      }); 
    });
      
  });  
});
//thu xem topic qua dc chua
router.get("/test", topic_controller.test);
//thêm topic mới
router.post("/topic_create", topic_controller.topic_create);
module.exports = router;

