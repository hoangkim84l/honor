"use strict"
const BaseModel = require('./base.model');
const Schema = require('mongoose').Schema;

var UserShopModel = new BaseModel("UserShops",{
    shopId: {type: Schema.Types.ObjectId, required: true},
    userId: {type: Schema.Types.ObjectId, required: true},
}); 

module.exports = UserShopModel;