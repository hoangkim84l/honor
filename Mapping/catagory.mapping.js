const Type = require('../Type');
module.exports = {
    mapToSimple : function mapToSimple(){
        return{
            _id : this._id,
            catagoryName : this.catagoryName,
            parentId: this.parentId,
        }
    }
}