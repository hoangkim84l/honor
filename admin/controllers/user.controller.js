const User = require('../models/user.model');
//test validate
exports.test = function(req, res){
    res.send('oh yeah qua dc');
};
//add new user
exports.user_create = function(req, res){
    var user = new User(
        {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
        }    
    );
    user.save(function(err){
        if(err){ 
            return next(err);
        }
        res.redirect('/users');
    });
};