const Topic = require('../models/topic.model');
//test validate
exports.test = function(req, res){
    res.send('oh yeah qua dc');
};
//add new topic
exports.topic_create = function(req, res){
    var topic = new Topic(
        {
            user_name : req.body.user_name,
            title : req.body.title,
            content : req.body.content,
            date : req.body.date,
            status : req.body.status,
        }    
    );
    topic.save(function(err){console.log(topic);
        if(err){ 
            return next(err);
        }
        res.redirect('/topic');
    });
};