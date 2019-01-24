var express = require('express');

// Options properties :
// 
function BaseController(options){
    options = options || { };
    var _ = this;
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

    router.GET = function(){
        router.get(arguments[0],arguments[1]);
        return router;  
    }

    router.POST = function(){
        router.post(arguments[0],arguments[1]);
        return router;  
    }

    return router;
}

module.exports = BaseController