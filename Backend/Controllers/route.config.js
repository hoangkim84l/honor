
function _initialize(appExpress){
    appExpress.use('/product',require('./product.controller'));
}

module.exports = {
    initialize : _initialize
}
