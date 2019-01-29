
var Catagory = require('../models/private/catagory.model');
var BaseDAL = require('./base.dal'); 
var CatagoryDAL = new BaseDAL(Catagory);

module.exports = CatagoryDAL;