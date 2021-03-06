<template>
    <div>
<div class="card mb-3" style="max-width: 1770px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="#" alt="#">
    //CommentFeed
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Your Reply</h5>
        <p class="card-text"><input type="text" v-model="comment"></p>
        <p class="card-text"><small class="text-muted"><button @click="postComment"></button></small></p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
 data(){
   return{
         comment:''
   }
 },
 methods:{
   postComment(){
     return axios.post('http://localhost:3000/comments/createComment',{comment:this.comment})
   }
 }

}
</script>