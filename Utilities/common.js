var emailValidator = require("email-validator");




var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz0123456789";
function GenerateRandomString(length){
    length = length || 6;
    var retVal = "";
    
    for (var i = 0; i < length; i++)
        retVal += characters.charAt(Math.floor(Math.random() * characters.length));

    return retVal;
}

function IsValidEmail(emailString){
    return emailValidator.validate(emailString);
}

module.exports = {
    GenerateRandomString : GenerateRandomString,
    IsValidEmail: IsValidEmail
}