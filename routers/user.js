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
 const {username,displayName,password,isAuthor}=req.body
 const hashedPassword = await UserService.hashPassword(password);
 const user=await UserService.add({username,displayName,password:hashedPassword,isAuthor})


res.json({
  data:user,
  message:'You Have SignUp Succesfully'
})
 } catch (e) {
 next(e);
 }

})


router.post('/login',async(req,res,next)=>{
  try {
  const {username,password}=req.body;
  const user =await UserService.findByUsername({username})
  if(!user) return next(new Error('username is not found'))
 const validPassword=await  UserService.validatePassword(password,user.password)
if(!validPassword) return next(new Error('Password is not correct'))


  } catch (e) {
  next(e)
  }

})

module.exports=router;