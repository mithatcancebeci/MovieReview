import MovieService from '../Services/MovieService'

const state={
movies:[],
grouped:[]
}
const actions={
    getMovies(context) {
        return MovieService.getMovies().then((res) => {
          context.commit('setMovies', res.data[0]);
        });
      },
}
const getters = {
    groupedMovies(state) {
      const grouped = [];
  
      state.movies.forEach((item, index) => {
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
  
}
export const movies = {
    state,
    getters,
    actions,
    mutations
};
