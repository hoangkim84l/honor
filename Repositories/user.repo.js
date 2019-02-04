var UserDAL = require('../dal/user.dal');
var type = require('../type');
var UtilityCommon = require('../Utilities/common');
var BadRequest = require('../Provider/error-provider').BadRequest;
var UtilityAuth = require('../Utilities/auth');

async function CreateUser(userData) {
    
    if(!userData) throw new BadRequest("User data invalid");
    if(!userData.email || !UtilityCommon.IsValidEmail(userData.email) ) throw new BadRequest("Email is invalid");
    
    var user = await UserDAL.FindUserByEmail(userData.email);
    if(user) throw new BadRequest("The email have already existed");

    var password = global.CONFIG.id === type.Development 
                    ? global.CONFIG.defaultPassword
                    : UtilityCommon.GenerateRandomString();

    var salt = UtilityCommon.GenerateRandomString(12);  
    var encryptedPassword = UtilityAuth.PasswordCrypto(password + salt);   
    
    userData.emailLowerCase = userData.email.toLowerCase();
    userData.password = encryptedPassword;
    userData.salt = salt;
    userData.userType = type.UserType.Customer;
    userData.fullName = (`${userData.fname || ''} ${userData.lname || ''}`).trim();
    userData.dob = (userData.dobDay && userData.dobMonth && userData.dobYear) 
                    ? new Date(userData.dobYear,userData.dobMonth-1,userData.dobDay) 
                    : null ;   

    return await UserDAL.Create(userData);
}

async function UpdateUser(userData){
    if(!userData) throw new BadRequest("User data invalid");

    var user = await UserDAL.GetById(userData._id);
    if(!user) throw new BadRequest(`User ${userData._id} is invalid`);

    var updateFields = {
        fname : userData.fname,
        lname : userData.lname,
        fullName :(`${userData.fname || ''} ${userData.lname || ''}`).trim(),
        dob :(userData.dobDay && userData.dobMonth && userData.dobYear) ? new Date(userData.dobYear,userData.dobMonth-1,userData.dobDay) : null,
        gender : userData.gender,
        phone : userData.phone,
    }

    return await UserDAL.Update(userData._id,updateFields);
}

async function GetUsers(){
    return await UserDAL.Find();   
}

async function GetUserDetail(userId){
    var a = await UserDAL.GetById(userId);
    console.log(a);
    return await UserDAL.GetById(userId);
}




module.exports = {
    CreateUser     : CreateUser,
    UpdateUser     : UpdateUser,
    GetUsers       : GetUsers,
    GetUserDetail  : GetUserDetail
}