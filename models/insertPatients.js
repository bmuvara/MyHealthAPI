const mongoose=require ('mongoose')

mongoose.connect('mongodb://localhost:27017/MyHealth')

const PatientSchema= new mongoose.Schema({
    _id:String,
    age:Number,
    gender:String
});

const Patient=mongoose.model("Patient",PatientSchema)

// Data to insert

const Patients=[
 {"_id":"1","age":"2","gender":"Male"},
 {"_id":"2","age":"3","gender":"Female"},
 {"_id":"3","age":"2","gender":"Male"},
 {"_id":"4","age":"4","gender":"Female"}
];

//Insert Data

Patient.insertMany(Patients)
.then(()=>{
    console.log('Patient Inserted');
    mongoose.Connection.close();
})

.catch(err=>{
    console.error('Error isnerting patients',err)
    mongoose.connection.close();
});