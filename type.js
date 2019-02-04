function EnumType(obj){
    var strKey = obj;
    var numKey = {};
    for(var key in obj) {
        numKey[obj[key]] = key;
    }
    
    return {
        getValue : function(key,defVal){
            if(!isNaN(key)){
                return numKey[key] || defVal;
            }
                
            else 
                return strKey[key] || defVal;
        }
    }

}


var UserType = {
    Customer : 1,
    ShopOnwer : 2,
    SystemStaff : 99
}

var ENV = {
    Development : "development",
    Production : "production"
}

module.exports = {
    UserType : new EnumType(UserType),
    ENV : ENV
}