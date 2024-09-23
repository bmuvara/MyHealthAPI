require('dotenv').config();
const express = require('express');
const connectDB=require ("./db/db");
const cors=require ("cors");
const bodyParser=require("body-parser")
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const reportRoutes=require('./routes/reports')

const app=express()
app.use(bodyParser.json())
app.use(cors())

//

connectDB();


//define authentication routes
app.use('/auth',authRoutes)

//Define User routes
app.use('/user',userRoutes)

app.use('/report',reportRoutes)

/* const PatientSchema=new mongoose.Schema({
    age:Number,
    gender:String
})

const Patient=mongoose.model('Patient',PatientSchema)
 */


//Route yo get Patients

/* app.get('/api/patients',(req,res)=>{
    Patient.find()
    .then(patients=>res.json(patients))
    .catch(err=>res.status(500),json({error:err.message}))

}
) */



const PORT=process.env.PORT || 3002;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});



