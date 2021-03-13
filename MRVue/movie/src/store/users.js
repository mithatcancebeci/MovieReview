import UserService from '../Services/UserService'
const state={
user:{},
comments:[],
}
const actions={
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
  