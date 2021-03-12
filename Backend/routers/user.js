const UserService=  require('../services/User-Service')
const express=require('express')
const router=express.Router();
const multer = require('multer');

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      const error = new Error("Incorrect file");
      error.code = "INCORRECT_FILETYPE";
      return cb(error, false)
    }
    cb(null, true);
  }
  
  const upload = multer({
    dest: './uploads',
    fileFilter,
    limits: {
      fileSize: 5000000
    }
  });


router.post('/:username',upload.single('file'),UserService.uploadImage)
router.get('/:username',UserService.getUser)
router.get('/comments/:username',UserService.getUserOfComments)

module.exports=router;