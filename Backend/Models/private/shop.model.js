"use strict"
const BaseModel = require('./base.model');
var ShopModel = new BaseModel("Shops",{
    shopName: {type: String, required: true},
    shopDescription : {type:String}
}); 

module.exports = ShopModel;