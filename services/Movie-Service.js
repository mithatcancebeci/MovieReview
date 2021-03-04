
const MovieModel=require('../models/movie')

exports.getMovies=async(req,res,next)=>{
 const movies=[]
 movies.push(await MovieModel.find())
    res.send(movies);
}

  


    