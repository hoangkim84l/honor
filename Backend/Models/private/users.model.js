"use strict"

const BaseModel = require('./base.model');
var UserModel = new BaseModel("Users",{
    email: {type: String, required: true},
    password : {type: String, required: true},
    salt : {type: String, required: true},
    name : {type:String},
    address: [],
    userType:[] 
}); 

module.exports = UserModel;




