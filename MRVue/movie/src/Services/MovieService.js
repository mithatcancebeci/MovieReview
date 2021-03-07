import axios from 'axios';


export default {
   getMovies(){
 return  axios.get('http://localhost:3000/movie/all')
    
    }
,
    getSimilarMovies(id){
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    }
  }
  

