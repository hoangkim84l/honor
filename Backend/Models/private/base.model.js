const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaseSchema = {
    createdDate : { type: Date, required: true, default: Date.now },
    lastUpdate : { type: Date, required: true, default: Date.now },
    isDeleted:{type:Boolean,required: false,default:false},
    logs : {type:[],required: true,default:[]},
}

function BaseModel(){ 
    if(arguments.length != 2) throw new Error('BaseModel required 2 parameters'); 
    
    var collectionName = arguments[0];
    var fields = arguments[1];
    var schema =  new Schema(Object.assign(BaseSchema,fields));
   
    schema.pre('update',function(){
        this.lastUpdate = Date.now(); 
        this.logs.push({
            userId : "DDD",
            action : "Update",
            data : this
        });   
    });

    schema.pre('create',function(){
        this.lastUpdate = Date.now(); 
        this.logs.push({
            userId : "DDD",
            action : "Create",
            data : this
        });   
    });



    return mongoose.model(collectionName, schema);
}

module.exports = BaseModel;