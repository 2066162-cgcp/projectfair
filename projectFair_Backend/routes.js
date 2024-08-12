const express=require('express')
const userContoller=require('./controller/userController')
const router=new express.Router()

router.post('/register',userContoller.registerController)

router.post('/login',userContoller.loginController)

module.exports=router