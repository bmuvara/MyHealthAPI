const mongoose=require('mongoose')

const ReportSchema = new mongoose.Schema({
    pname:String,
    gender:String,
    age:Number,
    location:Number,
    disease:String,
    dozage:Number,
    report_status:String

})

module.exports =mongoose.model('Report',ReportSchema)