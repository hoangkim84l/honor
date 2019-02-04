var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaseSchema = {
    createdDate : { type: Date, required: true, default: Date.now },
    lastUpdate : { type: Date, required: true, default: Date.now },
    isDeleted:{type:Boolean,required: false,default:false},
    logs : {type:[],required: true,default:[]},
}

function BaseModel(options){ 
    
    if(!options) throw new Error('BaseModel required options, please read document!'); 
    
    var collectionName = options.collectionName || "";
    var fields = options.fields || {};
    var mapping = options.mapping || [];

    if(!collectionName) throw new Error("BaseModel's options require collectionName, please read document!"); 
    
    var schema =  new Schema(Object.assign(fields,BaseSchema));
    Object.assign(schema.methods,mapping);
    
    schema.pre('save',function(next){
        this.lastUpdate = Date.now();  
        next();
    });
    
    return mongoose.model(collectionName, schema);
}

module.exports = BaseModel;