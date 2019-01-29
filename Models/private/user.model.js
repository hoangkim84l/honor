"use strict"

const BaseModel = require('./base.model');
const Schema = require('mongoose').Schema;
var UserModel = new BaseModel("Users",{
    email: {type: String, required: true},
    emailLowerCase : {type: String, required: true},
    password : {type: String, required: true},
    salt : {type: String, required: true},
    name : {type:String},
    // address: {
    //     type:[Schema.Types.Mixed],
    //     default : []
    // },
    userType: {type:Number, required: true}
}); 

module.exports = UserModel;
    



