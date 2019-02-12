let ShopDAL = require('../dal/shop.dal');
let UserDAL = require('../dal/user.dal');
var ErrorProvider = require('../Provider/error-provider');
var BadRequest = ErrorProvider.BadRequest;
var ObjectId = require('mongoose').Types.ObjectId


async function ValidShopParam(shopData){
	if(!shopData)
		throw new BadRequest ("Shop information is missing");

	if(!shopData.shopName)
		throw new BadRequest ("Shop name is required");
	
	if(!shopData.userId)
		throw new BadRequest ("Shop owner is required");

	if(!ObjectId.isValid(shopData.userId))
		throw new BadRequest ("Shop owner is invalid");

	let shop = await ShopDAL.FindShopByName(shopData.shopName);
	if(shop != null)
		throw new BadRequest ("Shop name is taken");
   
	let owner = await UserDAL.GetById(shopData.userId);
	console.log(owner);
	if(owner == null)
		throw new BadRequest ("Can't find the owner");
}

async function CreateShop(shopData){
	await ValidShopParam(shopData);
	
	return await ShopDAL.Create(shopData);
}

async function GetShop(){
	return await ShopDAL.Find();
}

module.exports = {
	CreateShop: CreateShop,
	GetShop: GetShop
}