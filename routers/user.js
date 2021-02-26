const UserService=require('../services/User-Service')
const express=require('express')
const router=express.Router();

router.get('/all',async(req,res)=>{
 const users=await UserService.findAll();
 res.send(users)
})

router.post('/', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
  })
module.exports=router;