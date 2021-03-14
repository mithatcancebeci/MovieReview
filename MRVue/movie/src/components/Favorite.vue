<template>
<div class="favorite">
    <div v-for="movie in favorite" :key="movie.id">
   <div class="card" >
   <div class="card-body" >
  <router-link :to="'/movie/'+movie.id" ><img :src="'https://image.tmdb.org/t/p/w92'+movie.poster_path" :alt="movie.poster_path"></router-link>
        <span class="card-title">{{movie.title}}</span>
   
  </div>
   </div>
   
    </div></div>
</template>
<script>
export default {

props:['favorite']
}
</script>
<style scoped>
.favorite{
  display:flex;
  flex-wrap:wrap;
}
.card{
  width:140px;
  border:none;
  margin:15px

}
img{
  border-radius: 15px;
}
.card-title{
  font-size:12px;
  font-weight: 700;
  color:#f42f42;
  text-align: center;
  
}

</style>