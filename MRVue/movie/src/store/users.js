import UserService from '../Services/UserService'
const state={
user:{},
comments:[],
favorites:[],
}
const actions={
    async getFavorites({commit},username){
   return UserService.getFavorites(username).then((res)=>{
       commit('setFavorites',{username,favorites:res.data})
   })
    },
async getUser({commit},username){
    return UserService.getUser(username).then((res)=>{
        commit('setUser',{username,user:res.data})
    })
},
async getUserOfComments({commit},username){
 return  UserService.getUserOfComments(username).then((res)=>{
     commit('setComments',{username,comments:res.data})
 })
} 
}
const getters={

}
const mutations={
    setFavorites(state,data){
  const {username,favorites}=data
  state.favorites=favorites
    },
setComments(state,data){
const{username,comments}=data
state.comments=comments
},
setUser(state,data){
    const {user}=data;
    state.user=user
}
}
export const users = {
    state,
    getters,
    actions,
    mutations
  };
  