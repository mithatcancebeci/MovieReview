const UserModel = require("../models/user.js");
const CommentModel = require("../models/comments");
const base64Img=require('base64-img')


exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    const body = {
      username: user.username,
      displayName: user.displayName,
      image: user.image,
      favorite: user.favorite,
    };
    res.json(body);
  } catch (e) {
    console.log(e);
  }
};
exports.getUserOfComments = async (req, res) => {
  try {
    await CommentModel.find()
      .limit(15)
      .populate({
        path: "user",
        match:{
          'username':req.params.username
        },
        select: ["username", "displayName", "image"],
      })
      .then((comments) => {
     
   res.json(comments); })
       

       } catch (e) {
    console.log(e);
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
exports.addFavorite=async(req,res)=>{
  conosole.log(req.body.username)
    const user = await UserModel.findOne({username:req.body.username})
   user.favorite.push(req.params.id);
   await user.save();
   res.json({
     success:true
   })
}