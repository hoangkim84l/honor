let BaseController = require('./base.controller');
let UserRepo = require('../repositories/user.repo');


async function GetUsers(req, res){
    res.send(await UserRepo.GetUsers());      
}

async function GetUserById(req, res){
    res.send(await UserRepo.GetUserById(req.params.userId));      
}

async function CreateUser(req, res){
    res.send(await UserRepo.CreateUser(req.body));
}

let UserController = new BaseController({
    authentication : true,
});

UserController
    .GET('/',GetUsers)
    .POST('/',CreateUser)
    .GET('/:userId',GetUserById);

module.exports = UserController;