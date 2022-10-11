const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    companyId:{type:Number,},
    primaryText:{type:String,},
    headline:{type:String,},
    description:{type:String,},
    CTA:{type:String,},
    image:{type:String}
},{
    timestamps:true,
})

const Data=mongoose.model('test',dataSchema)

module.exports= Data;