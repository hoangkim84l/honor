
var Product = require('../models/private/product.model');
var BaseDAL = require('./base.dal'); 
var ProductDAL = new BaseDAL("Product",Product);


module.exports = ProductDAL;