var CatagoryDAL = require('../dal/catagory.dal');
var BadRequest = require('../Provider/error-provider').BadRequest;

async function CreateCatagory(catagory){
	
	if(!catagory) throw new BadRequest("Catagory invalid");
	var catalog = await CatagoryDAL.FindCatagoryByName(catagory.catagoryName);
	if(catalog) throw BadRequest("The name Catagory have already existed");

	return await CatagoryDAL.Create(catagory);
}

async function UpdateCatagory(catagory){
	if(!catagory) throw new BadRequest("Catagory invalid");
	
	var catalog = await CatagoryDAL.GetById(catagory._id);
	if(!catalog) throw new BadRequest(`Catagory ${catagory._id} invalid`);

	var updateData = {
		catagoryName : catagory.catagoryName,
		parentId : catagory.parentId,
	}

	return await CatagoryDAL.Update(catagory._id,updateData);
}

async function GetCatagory(){
	return await CatagoryDAL.Find(); 
}

async function GetCatagoryDetail(catagoryId){
	return (await CatagoryDAL.GetById(catagoryId)).mapToSimple();
}

async function GetParentCatagory(){
	return await CatagoryDAL.Find({parentId:"null"}); 
}

async function DeleteCatagory(catagoryId){
	return await CatagoryDAL.Delete(catagoryId);
}

module.exports = {	
	GetCatagory : GetCatagory,
	CreateCatagory : CreateCatagory,
	UpdateCatagory : UpdateCatagory,
	GetCatagoryDetail : GetCatagoryDetail,
	GetParentCatagory : GetParentCatagory,
	DeleteCatagory : DeleteCatagory,
}