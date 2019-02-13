
var Catagory = require('../models/private/catagory.model');
var BaseDAL = require('./base.dal'); 

var CatagoryDAL = new BaseDAL(Catagory,{
    FindCatagoryByName : async function(catagoryName){
        return await Catagory.findOne({
            catagoryName:catagoryName,
            isDeleted:false
        });
    }
});

module.exports = CatagoryDAL;