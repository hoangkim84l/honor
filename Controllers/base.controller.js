var express = require('express');

function BaseController(options){
    options = options || { };

    var router = express.Router();

    if(options.authentication){
        var anonymous = options.anonymous || [];
        router.use(function(req, res, next) {
            if(anonymous.length > 0 && anonymous.indexOf(req.baseUrl) > -1){
                next();
            }
            
            next();
        })   
    }

    let wrap = fn => (...args) => fn(...args).catch(args[2]); 

    router.GET = function(){
        router.get(arguments[0],wrap(async (req, res,next) => {
            await arguments[1](req, res,next); 
        }));
        return router;  
    }

    router.POST = function(){
        router.post(arguments[0],wrap(async (req, res,next) => {
            await arguments[1](req, res,next); 
        }));
        return router;  
    }

    return router;
}

module.exports = BaseController