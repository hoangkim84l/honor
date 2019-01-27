let connectionString = 'mongodb://localhost:27017/' + global.CONFIG.database;
let mongoose = require('mongoose');

function _initialize(){
    mongoose.connect(connectionString, {useNewUrlParser: true});
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.info('Connected to '+connectionString);
    });
}


module.exports = {
    initialize : _initialize
}