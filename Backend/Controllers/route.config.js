
function _initialize(appExpress){
    appExpress.use('/product',require('./product.controller'));
    appExpress.use('/shop',require('./shop.controller'));
}

module.exports = {
    initialize : _initialize
}
