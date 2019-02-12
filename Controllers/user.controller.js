
var BaseController = require('./base.controller');
var UserRepo = require('../repositories/user.repo');


async function GetUsers(req, res){
    res.send(await UserRepo.GetUsers());      
}

async function CreateUser(req, res){
    res.send(await UserRepo.CreateUser(req.body));
}

var UserController = new BaseController({
    authentication : true,
});

UserController
    .GET('/',GetUsers)
    .POST('/',CreateUser);

module.exports = UserController;