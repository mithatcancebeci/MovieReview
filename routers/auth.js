const AuthService=require('../services/AuthService')
const CommentService=require('../services/CommentService')
const express=require('express')
const router=express.Router();
router.post('/signup',AuthService.signup)

router.post('/login',AuthService.login)

router.post('/createComment',CommentService.createComment)
router.get('/getComments',CommentService.getComments)

module.exports=router;