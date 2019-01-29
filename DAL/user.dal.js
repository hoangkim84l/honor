var User = require('../models/private/user.model');
var BaseDAL = require('./base.dal'); 

var UserDAL = new BaseDAL(User);

UserDAL.FindUserByEmail = async function(email){
    return await User.findOne({
        email:email,
        isDelete:false
    });   
}


module.exports = UserDAL;