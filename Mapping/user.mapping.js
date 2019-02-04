const Type = require('../Type');

module.exports = {
    mapToSimple : function mapToSimple(){
        return {
            _id : this._id,
            email : this.email,
            fullName : this.fullName,
            userType : Type.UserType.getValue(this.userType),
        }
    },
    mapToDetail : function mapToDetail(){
        return {
            _id : this._id,
            email : this.email,
            fname : this.fname,
            lname : this.lname,
            gender: this.gender,
            phone : this.phone,
            dob : this.dob
        }
    }
}