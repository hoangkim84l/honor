var User = require('../models/private/user.model');
var BaseDAL = require('./base.dal'); 

var UserDAL = new BaseDAL(User,{
    FindUserByEmail : async function(email){
        return await User.findOne({
            email:email,
            isDeleted:false
        });   
    }
}); 



module.exports = UserDAL;