const mongoose = require ("mongoose");

const groupSchema = mongoose.Schema({
    groupName : String,
    groupMembers : [],
    supervisor: String,
    coSupervisor:String,
    status: {
        type : String,
        default: "ACTIVE"
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
})

const Groups = mongoose.model('Groups' , groupSchema);

module.exports = Groups