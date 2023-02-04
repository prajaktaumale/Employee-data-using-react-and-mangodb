const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    Employeeid: {type:String, require},
    Name: {type:String, require},
    office: {type:String, require},
    Department : {type:String, require},
    Jobstatus:  {type:String, require},
    Jobtitle: {type:String, require}
},{
    timestamps:true
})
const empModel = mongoose.model('employees', empSchema)

module.exports = empModel