const users = require("../model/userModel")
const jwt=require('jsonwebtoken')

exports.registerController=async(req,res)=>{
     const {username,email, password}=req.body
     try {
          const existingUser=await users.findOne({email:email})
          if(existingUser){
               res.status(406).json('account already exist')
          }else{
               const newUser=new users({
                    username:username,
                    email:email, 
                    password:password,
                    github:'',
                    linkedin:'',
                    profile:''
               })
               await newUser.save()
               res.status(200).json(newUser)
          }
     } catch (error) {
          res.status(401).json(`Registration failed due to ${error}`)
     }
     
}

exports.loginController=async(req,res)=>{
     const{email,password}=req.body
     try {
          const existingUser=await users.findOne({email:email,password:password})
          if(existingUser){
               const token=jwt.sign({userId:existingUser._id},'superkey')
               res.status(200).json({existingUser,token})
          }else{
               res.status(406).json('invalid credentials')
          }
     } catch (error) {
          res.status(401).json(error)
     }
}