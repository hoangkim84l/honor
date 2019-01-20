"use strict"
const Schema = require('mongoose').Schema;
const BaseModel = require('./base.model');
var ProductModel = new BaseModel("Products",{
    productName: {type: String, required: true},
    shopId : {type:Schema.Types.ObjectId},
    categoryId: {type: Schema.Types.ObjectId}
}); 

module.exports = ProductModel;