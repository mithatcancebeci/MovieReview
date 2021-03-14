const UserModel = require("../models/user.js");
const CommentModel = require("../models/comments");
const MovieModel =require('../models/movie')
const base64Img=require('base64-img')


exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    const body = {
      username: user.username,
      displayName: user.displayName,
      image: user.image,
        };
    res.json(body);
  } catch (e) {
    console.log(e);
  }
};
exports.getUserOfComments = async (req, res) => {
 try {
await UserModel.findOne({username:req.params.username}).populate(
   {
     path:'comments',
     select:['content']
   }
 ).then((comments)=>{
   console.log(comments)
   res.json(comments)
 })
 } catch (e) {
 
 }
};
exports.uploadImage=(req,res)=>{
  const { image } = req.body;
  base64Img.img(image, './server/public', Date.now(), async(err, filepath)=>{
    const pathArr = filepath.replace(/\\/g,"/").split('/')
    const fileName = pathArr[pathArr.length - 1];
  const user=await  UserModel.findOne({username:req.params.username})
  user.image=fileName;
  await user.save();
    res.status(200).json({
      success:true
    })
  });

}
exports.getFavorite=async(req,res)=>{
 const user=await UserModel.findOne({username:req.params.username}).populate({path:"favorite",select:["title","poster_path"]}) 
  console.log(user)
}

exports.addFavorite=async(req,res)=>{
   const {movieId,username}=req.body
    const user = await UserModel.findOne({username})
    const movie =await MovieModel.findOne({id:movieId})
   user.favorite.push(movie._id);
  movie.owner_Favorite=user._id;
      await user.save();
      await movie.save()
   res.json({
     success:true
   })
}