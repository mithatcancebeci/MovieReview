const MovieService=require('../services/Movie-Service')
const express=require('express');
const { report } = require('./comment');
const router=express.Router();



router.get('/all',MovieService.getMovies);
router.post('/:id',MovieService.postCommentToMovie)
router.get('/:id',MovieService.getCommentsOfMovie)
   
   
   module.exports=router;