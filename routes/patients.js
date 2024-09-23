const mongoose=require('mongoose');
const patient = require('../models/patient');
const express=require('express')
const router=express.Router()

//Get all patients
router.get('/api/patients', async(req,res) => {

  try{

    const patients=await patient.find({age:4});
    res.json(patients);

  }
 catch(err){
   /*  res.status(500).json({message:err.message}) */
   console.error('Error fetching flights:', err);
   res.status(500).json({ message: 'Internal Server Error' });

 }
}
)

module.exports=router;