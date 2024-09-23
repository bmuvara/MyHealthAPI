const express=require('express');
const {authenticate}= require('../middlewares/auth');

const router=express.Router();

router.get('/profile',authenticate,(req,res)=>{
    console.log(req.headers);

    res.json({message:`welcome ${req.user.username}`})
});
module.exports=router