var Product = require('../models/private/product.model');
var ProductDAL = require('../dal/product.dal');

//ở đây sẽ còn vài step nữa nhưng hiện tại anh làm demo
//nên anh sẽ ko làm chỉ ghi ra cho em tưởng tượng 
async function CreateProduct(userId, product){
    // TODO : Dựa vào userId lấy shopId

    // Create new data model
    // var newProduct = new Product({
    //     productName :product.productName,  
    // }); 
    var newProduct = await ProductDAL.CreateProduct(product);
    return newProduct; 
}

async function GetProducts(){
    return await ProductDAL.GetProducts();   
}

//get productDetail by id
async function GetProductDetail(productName){
	return await ProductDAL.GetProductDetail(productName);

}

module.exports = {
    CreateProduct : CreateProduct,
    GetProducts : GetProducts,
    GetProductDetail : GetProductDetail 
}