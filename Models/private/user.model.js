"use strict"

const BaseModel = require('./base.model');
const UserMapping = require('../../Mapping/user.mapping');
//const Schema = require('mongoose').Schema;
var UserModel = new BaseModel({
    collectionName : "Users",
    fields : {
        email: {type: String, required: true},
        emailLowerCase : {type: String, required: true},
        password : {type: String, required: true},
        salt : {type: String, required: true},
        fullName : {type:String},
        fname : {type:String},
        lname : {type:String},
        phone : {type:String},
        gender:{type:Number, required: true, default:0},
        dob:{type:Date},
        dobDay:{type:Number},
        dobMonth:{type:Number},
        dobYear:{type:Number},
        userType: {type:Number, required: true, default:1}
    },
    mapping : UserMapping
    
});

module.exports = UserModel;
    



