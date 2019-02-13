var BaseController = require('./base.controller');
var CatagoryRepo = require('../repositories/catagory.repo');

async function CreateCatagory(req, res){
	res.send(await CatagoryRepo.CreateCatagory(req.body));
}

async function UpdateCatagory(req, res){
	res.send(await CatagoryRepo.UpdateCatagory(req.body));
}

async function GetCatagory(req, res){
	res.send(await CatagoryRepo.GetCatagory());
}

async function GetCatagoryDetail(req, res){
	res.send(await CatagoryRepo.GetCatagoryDetail(req.params.catagoryId));
}

async function GetParentCatagory(req, res){
	res.send(await CatagoryRepo.GetParentCatagory(req.params.parentId));
}
var CatagoryController = new BaseController({
	authentication : false,
});

CatagoryController
	.GET('/',GetCatagory)
	.POST('/',CreateCatagory)
	.PUT('/',UpdateCatagory)
	.GET('/parentCategory',GetParentCatagory)
	.GET('/:catagoryId',GetCatagoryDetail)

module.exports = CatagoryController;