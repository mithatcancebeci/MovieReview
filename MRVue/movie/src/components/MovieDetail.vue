<template>
  <div class="movieDetail">
    <div class="card" style="max-width: 1770px;">
      <div class="row g-0">
        <div class="col-md-3">
          <img
            :src="'https://image.tmdb.org/t/p/w300' + movieDetails.poster_path"
            :alt="movieDetails.poster_path"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-center">{{ movieDetails.title }}</h5>
            <span>Genres :</span>
            <div
              class="genres"
              :key="genres.id"
              v-for="genres in movieDetails.genres"
            >
              <span>{{ genres.name }}</span>
            </div>

            <p class="card-text text-left">{{ movieDetails.overview }}</p>
            <p v-for="trailer in movieVideos.results" :key="trailer.id">
              <iframe
                width="560"
                height="315"
                :src="'https://www.youtube.com/embed/'+trailer.key"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
            <p class="card-text">
              <small class="text-muted">{{ movieDetails.release_date }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["movieDetails", "movieVideos"]
};
</script>
<style scoped>
.movieDetail {
  margin-top: 100px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #f42f42;
}
.col-md-3 {
  margin-left: 50px;
}

.card-body {
  text-align: center;
}
.card {
  border: none;
}
.genres {
  display: inline-flex;
  margin-right: 5px;
  transform: scale(0.7, 0.7);
}
.genres:hover {
  background-color: #f42f42;
  color: white;
  transform: scale(1, 1);
  border-radius: 180px;
}
.genres:hover > span {
  border: none;
  transform: scale(1, 1);
}
.genres > span {
  border: 1px solid #f42f42;
  padding: 15px;
}
@media screen {
  .card {
    max-width: 1770px;
    min-width: 325px;
  }
}
</style>
