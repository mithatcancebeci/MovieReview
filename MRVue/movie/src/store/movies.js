import MovieService from '../Services/MovieService'

const state={
movies:[],
grouped:[],
similarMovies:[]
}
const actions={
    getMovies(context) {
        return MovieService.getMovies().then((res) => {
          context.commit('setMovies', res.data[0]);
        });
      },
      getSimilarMovies(context,id){
        return MovieService.getSimilarMovies(id).then((res)=>{
          context.commit("setSimilarMovies",{id,similarMovies:res.data.results[0]})
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
  
      state.similarMovies.map((item, index) => {
        if (index % 5 === 0) {
          grouped.push([]);
        }
        grouped[grouped.length - 1].push(item);
      });
  
      return grouped;
    },
    
  };
  
const mutations={
 
    setMovies(state, movies) {
        state.movies = movies;
      },
  setSimilarMovies(state,data){
    const {id,similarMovies} = data
    state.similarMovies[id]=similarMovies
  }
}
export const movies = {
    state,
    getters,
    actions,
    mutations
};
