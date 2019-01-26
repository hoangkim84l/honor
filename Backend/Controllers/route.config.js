
function _initialize(appExpress){
    appExpress.use('/product',require('./product.controller'));
    appExpress.use('/catagory',require('./catagory.controller'));
    appExpress.use('/shop',require('./shop.controller'));
}

module.exports = {
    initialize : _initialize
}
