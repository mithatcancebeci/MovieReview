const  mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    username : String,
    displayName : String,
    favorite:[]

})

const UserModel = mongoose.model('User',UserSchema)

module.exports = UserModel