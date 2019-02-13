"use strict"
const BaseModel = require('./base.model');
const CatagoryMapping = require('../../Mapping/catagory.mapping');

var CatagoryModel = new BaseModel({
	collectionName : "Catagories",
	fields : {
		catagoryName : {type: String, require: true},
		parentId : {type: String}
	},
	mapping : CatagoryMapping
});

module.exports = CatagoryModel;