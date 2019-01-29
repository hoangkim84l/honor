
var CatagoryDAL = require('../dal/catagory.dal');

async function CreateCatagory(catagory){
	return await CatagoryDAL.Create(catagory);
}
async function GetCatagory(){
	return await CatagoryDAL.Find();
}

module.exports = {
	CreateCatagory : CreateCatagory,
	GetCatagory : GetCatagory,
}