const UserService=require('../services/User-Service')
const express=require('express')
const router=express.Router();

router.get('/:username',UserService.getUser)
router.get('/comments/:username',UserService.getUserOfComments)

module.exports=router;