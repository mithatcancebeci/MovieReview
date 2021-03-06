import axios from 'axios';


export default {
   getMovies(){
 return  axios.get('http://localhost:3000/movie/all')
    
    }
  }
  

