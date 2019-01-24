
function BaseDAL(functionSuffix,Entity){
    async function Get(condition){
        condition = condition || {};
        return await Entity.find(condition);
    }

    async function Create(newModel){
        return await Entity.create(newModel);
    }
    
    async function Update(id, updateFields){
        var record = await Get({_id:id});
        if(recor == null) throw new Error($`{id} invalid`);
        record.set(updateFields);
        await record.save(); 
    }

    async function Delete(id){
        await Entity.update({ _id: id }, { $set: { isDeleted: true }});
    }

    var baseFunc = {
        Get:Get,
        Create:Create,
        Update:Update,
        Delete:Delete
    };
    // baseFunc["Get" + functionSuffix] = Get;
    // baseFunc["Create" + functionSuffix] = Create;
    // baseFunc["Update" + functionSuffix] = Update;
    // baseFunc["Delete" + functionSuffix] = Delete;

    return baseFunc;
}

module.exports = BaseDAL;