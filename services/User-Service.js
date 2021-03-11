const UserModel = require("../models/user.js");
const CommentModel = require("../models/comments");
const base64Img = require('base64-img');


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
      .limit(5)
      .populate({
        path: "user",
        match: { username: req.params.username },
        select: ["username", "displayName", "image"],
      })
      .then((comments) => {
        console.log(comments);
        res.json(comments);
      });
  } catch (e) {
    console.log(e);
  }
}
exports.uploadImage=async(req,res)=>{
 const { image } = req.file;
  base64Img.img(image, './server/public', Date.now(), async(err, filepath)=>{
    const pathArr = filepath.split('/')
    const fileName = pathArr[pathArr.length - 1];
    const user=await UserModel.findOne({username:req.params.username})
  
  user.image=`http://127.0.0.1:3000/${fileName}`
  await user.save();
  console.log(user.image)

  res.status(200).json({
    success: true,
    
});
});
}


