
var Product = require('../Models/private/product.model');
var BaseDAL = require('./base.dal'); 
var ProductDAL = new BaseDAL(Product);

module.exports = ProductDAL;