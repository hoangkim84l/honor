"use strict"
const BaseModel = require('./base.model');
var ShopModel = new BaseModel("Shops", {
	shopName : {type: String, require: true},
	shopDescription : {type:String},
	
});
module.exports = ShopModel;