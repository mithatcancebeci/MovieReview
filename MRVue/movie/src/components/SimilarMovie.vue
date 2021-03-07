<template>
   
  <div class="movies">
    <h4 class="text-center">Similar Movies You May Like</h4>
    <div class="row row-cols-1 row-cols-md-6 g-4">
      <div class="col" :key="movie.id" v-for="movie in similarMovies">
        <div class="card h-100">
          <div class="card-body">
            <img
              :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
              :alt="movie.poster_path"
            />
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ movie.release_date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['similarMovies']
}
</script>