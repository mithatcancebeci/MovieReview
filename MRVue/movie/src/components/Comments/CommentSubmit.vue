<template>
<div>
    <input type="text" v-model="comment">
    <button @click="postComment">postComment</button>
</div>
   
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            comment:'',
           
        }

    },computed:{
       currentUser(){
    return JSON.parse( this.$store.state.accounts.initialState.user)
       }

   },
   
    methods:{
         postComment(){
        return  axios.post(`http://localhost:3000/movie/${this.$route.params.id}`,{comment:this.comment,user:this.currentUser.data.username})
   }
    }
}
</script>
