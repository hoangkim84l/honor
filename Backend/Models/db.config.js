
var mongoose = require('mongoose');


function _initialize(){
    // var db_url = 'mongodb://localhost:27017/testnodejs';
    // var mongoDB = process.env.MONGODB_URI || db_url;
    // mongoose.connect(mongoDB);
    // mongoose.Promise = global.Promise;
    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'mongoDB not connect'));

    //Thiết lập kết nối tới Mongoose
    var mongoose = require('mongoose');
    var mongoDB = 'honortest';
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}


module.exports = {
    initialize : _initialize
}