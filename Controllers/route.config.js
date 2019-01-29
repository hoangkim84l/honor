
function _initialize(appExpress){
    appExpress.use('/products',require('./product.controller'));
    appExpress.use('/catagories',require('./catagory.controller'));
    appExpress.use('/shops',require('./shop.controller'));
    appExpress.use('/users',require('./user.controller'));
}

module.exports = {  
    initialize : _initialize
}
