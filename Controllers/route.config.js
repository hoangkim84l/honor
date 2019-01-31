

function _initialize(appExpress){
    //appExpress.use('/users',require('./user.controller'));
    appExpress.use('/api/v1/products',require('./product.controller'));
    appExpress.use('/api/v1/catagories',require('./catagory.controller'));
    appExpress.use('/api/v1/shops',require('./shop.controller'));
    appExpress.use('/api/v1/users',require('./user.controller'));
    
}

module.exports = {  
    initialize : _initialize
}
