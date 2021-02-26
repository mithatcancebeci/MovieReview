const BaseService=require('./BaseService')
const UserModel=require('../models/user')
class UserService extends BaseService{
  
    model=UserModel

}

module.exports=new UserService();