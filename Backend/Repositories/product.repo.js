var ProductDAL = require('../dal/product.dal');


async function CreateProduct(userId, product){
    var newProduct = await ProductDAL.Create(product);
    return newProduct; 
}

async function GetProducts(){
    return await ProductDAL.Get();   
}

//get productDetail by id
async function GetProductDetail(productName){
	return await ProductDAL.Find({
        productName : productName
    });

}

module.exports = {
    CreateProduct : CreateProduct,
    GetProducts : GetProducts,
    GetProductDetail : GetProductDetail 
}