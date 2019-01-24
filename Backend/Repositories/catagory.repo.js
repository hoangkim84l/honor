
var CatagoryDAL = require('../dal/catagory.dal');

async function CreateCatagory(catagory){
	return await CatagoryDAL.Create(catagory);
}
async function GetCatagory(){
	return await CatagoryDAL.Get();
}

module.exports = {
	CreateCatagory : CreateCatagory,
	GetCatagory : GetCatagory,
}