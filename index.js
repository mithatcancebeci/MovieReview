const express=require('express')
const bodyParser=require('body-parser')
const axios=require('axios')
const MovieModel=require('./models/movie')
const path=require('path')
const cors=require('cors')

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({limit:'50mb'}))

require("./mongodb-connection")
const userRouter=require('./routers/user')
const movieRouter=require('./routers/movie')
const authRouter=require('./routers/auth')
const commentRouter=require('./routers/comment')

app.use('/user',userRouter);
app.use('/movie',movieRouter);
app.use('/',authRouter)
app.use('/comments',commentRouter)


//  const addMovies=async(req,res,next)=>{
    
//      const movies= [] 
//      await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=63c20ab0688ef19ee1cdf0eacf135738&page=2')
//      .then((res=>{
//          movies.push(res.data.results)
      
//      }))
//      await MovieModel.create(movies[0])  
//  }
// addMovies()
// const movies=()=>{
//     const movie=axios.get('https://api.themoviedb.org/3/movie/527774?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US').then((res)=>{console.log(res.data)})
//     console.log(movie)
// }
// movies()
app.use("/images", express.static(path.join("backend/images")));
app.use((err, req, res, next) => {
    if (err.code === "INCORRECT_FILETYPE") {
      res.status(422).json({ error: 'Only images are allowed' });
      return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
      res.status(422).json({ error: 'Allow file size is 500KB' });
      return;
    }
  });
  
app.listen('3000',function(){
    console.log('listening')
})