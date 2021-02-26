const BaseService=require('./BaseService')
const MovieModel=require('../models/movie')

class MovieService extends BaseService {
    model=MovieModel
}
module.exports=new MovieService()
    