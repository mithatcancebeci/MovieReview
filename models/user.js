const  mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    username :{
        type:String,
        required:true,
        minlength:2
    }
    ,
    displayName :{
        type:String,
        required:true,
        minlength:2,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
 

})

const UserModel = mongoose.model('User',UserSchema)

module.exports = UserModel