const mongoose=require('mongoose')

const PatientSchema = new mongoose.Schema({
    age:Number,
    gender:String

})

module.exports =mongoose.model('Patients',PatientSchema)