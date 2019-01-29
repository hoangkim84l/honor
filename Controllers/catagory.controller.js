var BaseController = require('./base.controller');
var CatagoryRepo = require('../repositories/catagory.repo');

async function CreateCatagory(req, res){
	res.send(await CatagoryRepo.CreateCatagory(req.body));
}

async function GetCatagory(req, res){
	res.send(await CatagoryRepo.GetCatagory());
}

var CatagoryController = new BaseController({
	authentication : false,
});

CatagoryController
	.GET('/',GetCatagory)
	.POST('/',CreateCatagory)

module.exports = CatagoryController;