const MovieService=require('../services/Movie-Service')
const express=require('express')
const router=express.Router();



router.get('/all',async(req,res)=>{
    const movies=await MovieService.findAll();
    res.send(movies)
   })

   
   module.exports=router;