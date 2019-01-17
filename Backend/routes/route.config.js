
var indexRouter = require('./index');
var usersRouter = require('./users');
var contactRouter = require('./contact');
var topicRouter = require('./topic');


function _initialize(appExpress){
    // appExpress.use('/', indexRouter);
    // appExpress.use('/users', usersRouter);
    // appExpress.use('/contact', contactRouter);
    // appExpress.use('/topic', topicRouter);
    appExpress.use('/product',require('./product'))
}

module.exports = {
    initialize : _initialize
}
