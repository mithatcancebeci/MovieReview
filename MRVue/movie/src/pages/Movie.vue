<script>
import TopBar from '../components/TopBar'
import SimilarMovies from '../components/SimilarMovies'
import MovieDetail from '../components/MovieDetail'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
export default {
name:"Movie",
  data(){
      return{
          movieDetails:{},
          movieVideos:{},
          movieCredits:[],
          similarMovies:[],
         
      }
  },
  components:{TopBar,MovieDetail,MovieCard}
 ,
  created(){
  
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    .then((res)=>{
    this.movieDetails=res.data})
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/similar?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
   .then((res)=>{
          for(var i=0;i<5;i++)
        this.similarMovies.push(res.data.results[i])
   })
  axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
   .then((res)=>{
     this.movieVideos=res.data}) 
  axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US&page=1`)
  .then((res)=>
  
     {
        for(var i=0;i<5;i++)
       this.movieCredits.push(res.data.cast[i])

     })
  },
  }
</script>
<template>
    <div>
      <TopBar/>
      <MovieDetail :movieDetails=movieDetails :movieVideos=movieVideos :movieCredits=movieCredits />
      <MovieCard  :movies=similarMovies />
</div>
</template>
