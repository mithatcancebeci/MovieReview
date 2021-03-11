import axios from 'axios';
export default{
    getUser(username){
       return  axios.get(`http://localhost:3000/user/${username}`)
    },
    getUserOfComments(username){
        return axios.get(`http://localhost:3000/user/comments/${username}`)
    }
    
}