"use strict"
const BaseModel = require('./base.model');

const Schema = require('mongoose').Schema;

var ShopModel = new BaseModel({
    collectionName : "Shops",
    fields : {
        shopName: {type: String, required: true},
        shopDescription : {type: String},
        address : {type: String},
        longitude : {type: String},
        latitude : {type: String},
        userId : {type: Schema.Types.ObjectId, required: true}
    }
});

module.exports = ShopModel;