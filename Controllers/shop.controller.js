let BaseController = require('./base.controller');
let ShopRepo = require('../repositories/shop.repo');

async function GetShop(req, res){
	res.send(await ShopRepo.GetShop());
}

async function CreateShop(req, res){
	res.send(await ShopRepo.CreateShop(req.body));
}

let ShopController = new BaseController({
	authentication : true,
});

ShopController
	.GET('/', GetShop)
	.POST('/', CreateShop);

module.exports = ShopController;