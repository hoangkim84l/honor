var userRepository = require('../repositories/user.repository');

//add new user
exports.user_create = function(req, res){
    userRepository.CreateUser(req.body);
    
};