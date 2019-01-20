var db = require('mongoose').connection;
var Product = require('../models/private/product.model');
var ProductCollection = db.collection("Products");

async function CreateProduct(product){  
    return await Product.create(product);
}

async function GetProducts(){
    return await Product.find();
}

module.exports = {
    CreateProduct : CreateProduct,
    GetProducts : GetProducts,
}