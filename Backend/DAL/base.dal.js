var mongoose = require('mongoose');


function BaseDAL(mongooseEntity,extendDAL){
    extendDAL = extendDAL || {};
    async function GetById(id){
        return await mongooseEntity.findOne({_id :id, isDeleted:false});
    }

    async function Find(condition){
        condition = condition || {};
        return await mongooseEntity.find(condition);
    }

    async function Create(newObject){
        var newModel = new mongooseEntity(newObject);
        return await newModel.save();   
    }
    
    async function Update(id, updatedFields){
        var record = await GetById({_id:id});
        if(recor == null) throw new Error($`{id} invalid`);
        record.set(updatedFields);
        return await record.save(); 
    }

    async function Delete(id){
        return await Update(id,{ isDeleted: true });
    }

    var baseFunc = {
        Find:Find,
        GetById : GetById,
        Create:Create,
        Update:Update,
        Delete:Delete
    };

    return Object.assign(baseFunc,extendDAL);
}

module.exports = BaseDAL;