
var BaseController = require('./base.controller');
var ProductRepo = require('../repositories/product.repo');

async function GetProducts(req, res){
    res.send(await ProductRepo.GetProducts());      
}

async function GetProductDetail(req, res){
    res.send(await ProductRepo.GetProductDetail()); 
}

async function CreateProduct(req, res){
    res.send(await ProductRepo.CreateProduct("User test", req.body));
}

var ProductController = new BaseController({
    authentication : true,
});

ProductController
    .GET('/',GetProducts)
    .POST('/',CreateProduct)
    .GET('/:productName',GetProductDetail);

module.exports = ProductController;