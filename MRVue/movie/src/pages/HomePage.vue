<template>
<div>
<TopBar/>
<MovieCard :movies=movies />
<MovieCard :movies=movies2 />
<MovieCard :movies=movies3 />
<MovieCard :movies=movies4 />
</div>

</template>
<script>
import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
export default {
    data(){
        return{
           movies:[],
           movies2:[],
           movies3:[],
           movies4:[]
         
        }
    },
    components:{
TopBar,MovieCard
    },created(){
         axios.get('http://localhost:3000/movie/all')
           .then((res)=>{
               for( var i=0 ;i<=4;i++){

                   this.movies.push(res.data[0][i])
                   this.movies2.push(res.data[0][i+5])
                   this.movies3.push(res.data[0][i+10])
                   this.movies4.push(res.data[0][i+15])

               }                  
                
               })
    }
}
</script>
<style scoped>

</style>