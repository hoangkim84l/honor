var Catagory = require('../models/private/catagory.model');
var CatagoryDAL = require('../dal/catagory.repo');

async function CreateCatagory(catagory){
	return await CatagoryDAL.CreateCatagory(catagory);
}
async function GetCatagory(){
	return await CatagoryDAL.GetCatagory();
}

module.exports = {
	CreateCatagory : CreateCatagory,
	GetCatagory : GetCatagory,
}