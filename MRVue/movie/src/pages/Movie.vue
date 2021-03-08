<script>
import SimilarMovies from '../components/SimilarMovie'

import MovieDetail from "../components/MovieDetail";
import CommentView from '../components/Comments/CommentView'
import { mapGetters } from "vuex";
export default {
  name: "Movie",
  data() {
    return {
      
    };
  },
  components: { MovieDetail,CommentView,SimilarMovies},
computed: {
    ...mapGetters([
      'groupedSimilarMovies',
    ]),
    ...mapGetters([
      'groupedMovieCast'
    ]),
    movieDetails(){
      return this.$store.state.movies.movieDetails
    }
    
  },
   created() {
    this.$store.dispatch('getMovieDetails',this.$route.params.id)
    this.$store.dispatch("getSimilarMovies",this.$route.params.id)
    this.$store.dispatch('getMovieCredits',this.$route.params.id)
    }

// created() {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`
  //     )
  //     .then(res => {
  //       this.movieDetails = res.data;
  //     });
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${this.$route.params.id}/similar?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`
  //     )
  //     .then(res => {
  //       for (var i = 0; i < 5; i++)
  //         this.similarMovies.push(res.data.results[i]);
  //     });
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`
  //     )
  //     .then(res => {
  //       this.movieVideos = res.data;
  //     });
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US&page=1`
  //     )
  //     .then(res => {
  //       for (var i = 0; i < 5; i++) this.movieCredits.push(res.data.cast[i]);
  //     });
  // }
};
</script>
<template>
  <div>
   
    <MovieDetail
      :movieDetails="movieDetails"
      :movieVideos="movieVideos"
      :movieCredits="groupedMovieCast"
   />
   <CommentView />
   <SimilarMovies :similarMovies=groupedSimilarMovies />
  </div>
  </template>