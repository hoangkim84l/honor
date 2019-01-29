var UserDAL = require('../dal/user.dal');
var type = require('../type');
var UtilityCommon = require('../Utilities/common');
var BadRequest = require('../Provider/error-provider').BadRequest;
var UtilityAuth = require('../Utilities/auth');

async function CreateUser(userData) {
    
    if(!userData) throw new BadRequest("User data is missing");
    if(!userData.email || !UtilityCommon.IsValidEmail(userData.email) ) throw new BadRequest("Email is invalid");
    
    
    var user = await UserDAL.FindUserByEmail(userData.email);
    if(user) throw new BadRequest("The email have already existed");

    var password = global.CONFIG.id === type.Development 
                    ? global.CONFIG.defaultPassword
                    : UtilityCommon.GenerateRandomString();

    var salt = UtilityCommon.GenerateRandomString(12);  
    var encryptedPassword = UtilityAuth.PasswordCrypto(password + salt);              

    return await UserDAL.Create({
        email : userData.email,
        emailLowerCase : userData.email.toLowerCase(),
        password : encryptedPassword,
        salt : salt,
        userType:type.UserType.Customer 
    });
}

async function GetUsers(){
    return await UserDAL.Find();   
}

async function GetUserById(userId){
    return await UserDAL.GetById(userId);
}


module.exports = {
    CreateUser  : CreateUser,
    GetUsers    : GetUsers,
    GetUserById : GetUserById
}