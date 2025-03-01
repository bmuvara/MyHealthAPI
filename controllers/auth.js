const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
const User=require('../models/User');
const Report=require('../models/Reports')
//Register a new user


const register= async (req,res,next)=>{
  
    const{username,email,password}=req.body
  try{/* 
   const hashedPassword=await bcrypt.hash(password,10); */
   const user=new User({username,email,password:password});
   await user.save();
   res.json({message:'Registration Successfully'})


  }catch(error){
    next(error);

  }

};

// Login with an existing user

const login= async(req,res,next)=>{

    const {username,password}=req.body

    try{

        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({message:'Incorrect password'})
        }

        const passwordMatch=await user.comparePassword(password);
        if (!passwordMatch){
            return res.status(401).json({message:'Incorrect password'})
        }

      const token=jwt.sign({userId:user._id},process.env.SECRET_KEY,{

        expiresIn:'1h'
        
      });
      res.json({token}
        
      );
    }
    catch(error){
        next(error)
    }
};





module.exports={register,login}



