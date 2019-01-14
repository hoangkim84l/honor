var userRepository = require('../repositories/user.repository');

//add new user
exports.user_create = function(req, res){
    userRepository.CreateUser(req.body);
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