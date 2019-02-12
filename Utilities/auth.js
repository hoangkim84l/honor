const crypto = require('crypto');
const secret = global.CONFIG.secret; 


function PasswordCrypto(str){
    return crypto.createHmac('sha256', secret)
                   .update(str)
                   .digest('hex');
}


module.exports = {
    PasswordCrypto : PasswordCrypto
}