
function _initialize(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/honortest', {useNewUrlParser: true});
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.info('Connected to database');
    });
}


module.exports = {
    initialize : _initialize
}