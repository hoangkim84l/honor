const User = require('../models/user.model');


function _createUser(data){
    var user = new User(
        {
            name : data.name,
            email : data.email,
            phone : data.phone,
        }    
    );
    
    user.save(function(err){
        if(err){ 
            return next(err);
        }
        res.redirect('/users');
    });
}




exports = {
    CreateUser : _createUser 
}