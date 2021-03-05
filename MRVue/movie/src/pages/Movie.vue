<script>
import TopBar from '../components/TopBar'
import MovieDetail from '../components/MovieDetail'
import axios from 'axios'
export default {
name:"Movie",
  data(){
      return{
          movieDetails:{},
          movieVideos:{}
         
      }
  },
  components:{TopBar,MovieDetail}
 ,
  
  created(){
  
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    .then((res)=>{console.log(res.data)
    this.movieDetails=res.data})
   
  },
  mounted(){
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
   .then((res)=>{
     this.movieVideos=res.data})
  }
}
</script><template>
    <div>
      <TopBar/>
      <MovieDetail :movieDetails=movieDetails :movieVideos=movieVideos />
</div>
</template>
