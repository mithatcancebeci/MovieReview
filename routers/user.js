const UserService=require('../services/User-Service')
const express=require('express')
const router=express.Router();

router.get('/all',async(req,res)=>{
 const users=await UserService.findAll();
 res.send(users)
})

router.post('/', async (req, res,next) => {
    const user = await UserService.add(req.body)
    res.send(user)
  })

router.post('/signup',async(req,res,next)=>{
 try {
 const {username,displayName,password}=req.body
 const user=await UserService.add(req.body)
 await user.save();
res.json({
  data:user,
  message:'You Have SignUp Succesfully'
})

 } catch (e) {
 next(e);
 }
})
module.exports=router;