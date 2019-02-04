"use strict"
const Schema = require('mongoose').Schema;
const BaseModel = require('./base.model');

var CatagoryModel = new BaseModel({
	collectionName : "Catagories",
	fields : {
		catagoryName : {type: String, require: true},
		parentId : {type:Schema.Types.ObjectId}
	}
});

module.exports = CatagoryModel;