
var BaseController = require('./base.controller');
var UserRepo = require('../repositories/user.repo');


async function GetUsers(req, res){
    res.send(await UserRepo.GetUsers());      
}

async function GetUserDetail(req, res){
    res.send(await UserRepo.GetUserDetail(req.params.userId));      
}

async function CreateUser(req, res){
    res.send(await UserRepo.CreateUser(req.body));
}

async function UpdateUser(req, res){
    res.send(await UserRepo.UpdateUser(req.body));
}

var UserController = new BaseController({
    authentication : true,
});

UserController
    .GET('/',GetUsers)
    .POST('/',CreateUser)
    .PUT('/',UpdateUser)
    .GET('/:userId',GetUserDetail)
    
    ;

module.exports = UserController;