<script>
import axios from 'axios'
export default {
name:"Movie",
  data(){
      return{
          movieDetails:{},
         
      }
  },

 
  
  created(){
  
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    .then((res)=>{console.log(res.data)
    this.movieDetails=res.data})
  
  }
}
</script><template>
    <div>
       {{movieDetails.title}}
      
    </div>
</template>
