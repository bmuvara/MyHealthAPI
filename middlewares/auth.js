const jwt=require('jsonwebtoken');
const User=require('../models/User')

const authenticate=async (req,res,next)=>{

    const token=req.headers.authorization?.split(' ')[1];

    if(!token){

        res.status(401).json({message:'Authentication is required'});

    }

    try{

        console.log('Secret key:', process.env.SECRET_KEY); // Remove this in production
        console.log('Decoded token:', jwt.decode(token, {complete: true}));
        const decodedToken=jwt.verify(token,process.env.SECRET_KEY);
        const user=await User.findById(decodedToken.userId);
       if (!user){

        return res.status(404).json({message:'Usernot found'})
       }

       req.user=user
       next()
 
    } catch(error){
        console.error('Full error object:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired' });
        }
        res.status(401).json({message:'Invalid Token'})
    }
};
module.exports={authenticate}