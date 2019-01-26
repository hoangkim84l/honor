let Shop = require('../models/private/shop.model');
let ShopDAL = require('../dal/shop.dal');

async function CreateShop(userId, shopz){
	return await ShopDAL.CreateShop(shopz);
}

async function GetShop(){
	return await ShopDAL.GetShop();
}

module.exports = {
	CreateShop: CreateShop,
	GetShop: GetShop
}