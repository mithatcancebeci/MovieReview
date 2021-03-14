const UserService=  require('../services/User-Service')
const express=require('express')
const router=express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});



router.get('/bookmarks/:username',UserService.getFavorite)
router.post('/:username',upload.single('file'),UserService.uploadImage)
router.get('/:username',UserService.getUser)
router.get('/comments/:username',UserService.getUserOfComments)
module.exports=router;