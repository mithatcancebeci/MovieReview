const UserModel=require('../models/user.js')

   exports.getUsers=async(req,res)=>{
        const users=await UserModel.find()
        res.send(users)
      }




