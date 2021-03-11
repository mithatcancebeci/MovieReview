const UserModel = require("../models/user.js");
const CommentModel = require("../models/comments");

exports.getUser=async(req,res)=>{
   try {
   const user= await UserModel.findOne({username:req.params.username});
   const body={
      username:user.username,
      displayName:user.displayName,
      image:user.image,
   }
   res.json(body)
   } catch (e) {
   console.log(e)
   }
}
// exports.uploadImage=async(req,res)=>{
//  const user=await UserModel.findOne({username:req.params.username})
//  const image={
//     data:fs.readFileSync(path.join(_dirname+'/uploads/'+req.file.filename)),
//     contentType:'image/png'
//  }
//  user.image=image;
// await  user.save()
// }



