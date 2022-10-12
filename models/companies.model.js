const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    
    name:{type:String,},
    url:{type:String,},
    
},{
    timestamps:true,
})

const Company=mongoose.model('company',companySchema)

module.exports= Company;