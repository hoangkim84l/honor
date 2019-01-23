let Shop = require('../models/private/shop.model');

async function CreateShop(shop){
	console.log(shop);
	return await Shop.create(shop);
}

async function GetShop(){
	return await Shop.find();
}

module.exports = {
	CreateShop: CreateShop,
	GetShop: GetShop
}


