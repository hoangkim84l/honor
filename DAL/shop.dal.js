var Shop = require('../Models/private/shop.model');
var BaseDAL = require('./base.dal'); 

var ShopDAL = new BaseDAL(Shop,{
    FindShopByName : async function(shopName){
        return await Shop.findOne({
            shopName : shopName,
            isDeleted : false
        });
    }   
});
module.exports = ShopDAL;