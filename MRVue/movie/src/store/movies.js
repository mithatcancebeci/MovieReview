import MovieService from '../Services/MovieService'

const state={
movies:[],
grouped:[],
similarMovies:[],
movieDetails:{},
movieCredits:[],
}
const actions={
    getMovies({commit}) {
        return MovieService.getMovies().then((res) => {
          commit('setMovies', res.data[0]);
        });
      },
      getSimilarMovies({commit},id){
        return MovieService.getSimilarMovies(id).then((res)=>{
          commit("setSimilarMovies",{id,similarMovies:res.data.results})
        })
      },
      getMovieCredits({commit},id){
        return MovieService.getMovieCredits(id).then((res)=>{
          commit("setMovieCredits",{id,movieCredits:res.data.cast})
        })
      }
      ,
      getMovieDetails({commit},id){
        return MovieService.getMovieDetails(id).then((res)=>{
          commit('setMovieDetails',{id,movieDetails:res.data})
        })
      }
}
const getters = {
    groupedMovies(state) {
      const grouped = [];
  
      state.movies.map((item, index) => {
        if (index % 5 === 0) {
          grouped.push([]);
        }
        grouped[grouped.length - 1].push(item);
      });
  
      return grouped;
    },
    groupedSimilarMovies(state) {
      const grouped = [];
      for(var i=0;i<state.similarMovies.length;i++){
        grouped.push(state.similarMovies[i]) 
        if(i===4){
           break;
         }
       }
    
      
  
      return grouped;
    },
    groupedMovieCast(state) {
      const grouped = [];
  
     for(var i=0;i<state.movieCredits.length;i++){
      grouped.push(state.movieCredits[i]) 
      if(i===4){
         break;
       }
     }
  
      return grouped;
    }
  };
  
const mutations={
 
    setMovies(state, movies) {
        state.movies = movies;
      },
  setSimilarMovies(state,data){
    const {similarMovies} = data
    state.similarMovies=similarMovies
  },
  setMovieCredits(state,data){
    const {movieCredits}=data
    state.movieCredits=movieCredits
  },
  setMovieDetails(state,data){
    const{movieDetails}=data
    state.movieDetails=movieDetails
  }
}
export const movies = {
    state,
    getters,
    actions,
    mutations
};
