const BaseService=require('./BaseService')
const UserModel=require('../models/user.js')
const bcrypt = require('bcrypt');

class UserService extends BaseService{
  
    model=UserModel
   
    
    async  hashPassword(password) {
        return await bcrypt.hash(password, 10);
      }
      
      async  validatePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
      }
 
}

module.exports=new UserService();