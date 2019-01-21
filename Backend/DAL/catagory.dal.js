var db = require('mongoose').connection;
var Catagory = ('../models/private/catagory.model');
var CatagoryCollection = db.collection("Catagories");

async function CreateCaragory($catagory){
	return await Catagory.create(catagory);
}
async function GetCatagory(){
	return await Catagory.find();
}

module.exports = {
	CreateCaragory : CreateCaragory,
	GetCatagory : GetCatagory,
}