
function _initialize(appExpress){
    appExpress.use('/product',require('./product.controller'));
    appExpress.use('/catagory',require('./catagory.controller'));
}

module.exports = {
    initialize : _initialize
}
