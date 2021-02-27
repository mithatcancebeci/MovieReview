const BaseService=require('./BaseService')
const UserModel=require('../models/user.js')
class UserService extends BaseService{
  
    model=UserModel
    
 
}

module.exports=new UserService();