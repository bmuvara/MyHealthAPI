const mongoose=require('mongoose');
const Report = require('../models/Reports');
const express=require('express')
const router=express.Router()





router.post('/createReport', async (req,res,next)=>{
  
    const{pname,gender,age,location,disease,dozage,report_status}=req.body
  try{/* 
   const hashedPassword=await bcrypt.hash(password,10); */
  
   console.log(req.body);
   const report=new Report({pname,gender,age,location,disease,dozage,report_status});
   await report.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);
  
  }
  
  });
  
  



//Fetch all reports
router.get('/Allreport', async(req,res) => {

  try{

    const reports=await Report.find();
    res.json(reports);

  }
 catch(err){
   /*  res.status(500).json({message:err.message}) */
   console.error('Error fetching Reports:', err);
   res.status(500).json({ message: 'Internal Server Error' });

 }
}
)


//Fetch  reports by status
router.post('/Statusreport', async(req,res) => {

    try{
      const { report_status } = req.body;
      
      console.log('Request body:', req.body);
      const reports=await Report.find({report_status: report_status});
      console.log('report_:', reports);
      res.json(reports);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching flights:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )



//view individual patient report
router.post('/Patienreport', async(req,res) => {

    try{

      const { pname } = req.body;
      
      console.log(pname, req.body);
  
      const reports=await Report.findOne({pname:pname});
      res.json(reports);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching flights:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )

module.exports=router;