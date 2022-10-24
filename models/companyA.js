const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    employee_number:{
        type:Number   
    },
    head_office:{
        type:String,   
    },
},{timestamps:true})

module.exports = mongoose.model('company_table', CompanySchema)