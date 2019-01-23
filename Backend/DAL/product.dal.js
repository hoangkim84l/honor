var db = require('mongoose').connection;
var Product = require('../models/private/product.model');

async function CreateProduct(product){  
    
    
    return await Product.create(product);
}

async function GetProducts(){
    return await Product.find();
}

async function GetProductDetail(productName){
	return await Product.find({productName : productName});
}
module.exports = {
    CreateProduct : CreateProduct,
    GetProducts : GetProducts,
    GetProductDetail : GetProductDetail,
}