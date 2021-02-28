const CommentModel=require('../models/comments')

exports.createComment=async(req,res,next)=>{
    const comment=await CommentModel.create(req.body);
    
    res.send(comment);
}
exports.getComments=async(req,res,next)=>{
    const comments=await CommentModel.find()
  
    res.send(comments)
}