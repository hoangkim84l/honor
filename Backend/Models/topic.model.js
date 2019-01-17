const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TopicSchema = new Schema({
    user_name: {type: String},
    title: {type: String},
    content: {type: String},
    date: {type: String},
    status: {type: String}
});

//export modules
module.exports = mongoose.model('Topic', TopicSchema);