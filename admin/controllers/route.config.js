
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var contactRouter = require('../routes/contact');
var topicRouter = require('../routes/topic');


function _initialize(appExpress){
    appExpress.use('/', indexRouter);
    appExpress.use('/users', usersRouter);
    appExpress.use('/contact', contactRouter);
    appExpress.use('/topic', topicRouter);
}

module.exports = {
    initialize : _initialize
}
