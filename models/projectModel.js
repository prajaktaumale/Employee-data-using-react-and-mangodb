const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    Task: {type:String, require},
    Assignedto: {type:String, require},
    Phase: {type:String, require},
    Status : {type:String, require},
    Payment:  {type:String, require},
},{
    timestamps:true
})
const projectModel = mongoose.model('projects', projectSchema)

module.exports = projectModel