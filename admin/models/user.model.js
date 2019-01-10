const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String},
    phone: {type: String},
    email: {type: String}
});

//export modules
module.exports = mongoose.model('User', UserSchema);