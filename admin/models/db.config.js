
var mongoose = require('mongoose');


function _initialize(){
    var db_url = 'mongodb://localhost:27017/testnodejs';
    var mongoDB = process.env.MONGODB_URI || db_url;
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongoDB not connect'));
}


module.exports = {
    initialize : _initialize
}