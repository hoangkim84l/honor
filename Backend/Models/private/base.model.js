var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaseSchema = {
    createdDate : { type: Date, required: true, default: Date.now },
    lastUpdate : { type: Date, required: true, default: Date.now },
    isDeleted:{type:Boolean,required: false,default:false},
    logs : {type:[],required: true,default:[]},
}

function BaseModel(){ 
    if(arguments.length != 2) throw new Error('BaseModel required 2 parameters'); 
    
    var collectionName = arguments[0];
    var fields = arguments[1];
    
    var schema =  new Schema(Object.assign(fields,BaseSchema));

    schema.pre('save',function(next){
        this.lastUpdate = Date.now();  
        next();
    });
    
    return mongoose.model(collectionName, schema);
}

module.exports = BaseModel;