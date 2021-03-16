<template>
  <div class="align-center">
 
     <div class="" v-if="this.ownerLoggedIn">
      <form class="form">
      <input type="text" v-model="title" placeholder="title"/>
      <input type="text" v-model="overview" placeholder="overview" />
      <label for="upload"><Share /></label>
      <button @click="uploadImage">Save Movie</button>
     <input @change="handleImage" class="custom-input" id="upload" type="file" accept="image/*">
    </form>
    </div>
     
  </div>

  
 
</template>
<script>
import axios from 'axios'
import Share from './icons/Share'
export default {
  data() {
    return {
      title: "",
      overview: "",
      ownerLoggedIn:''
    };
  },
  components:{Share}
  ,
  methods: {
  
    handleImage(e) {
      const selectedImage = e.target.files[0]; 
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
  
      };
      reader.readAsDataURL(fileObject);
    },
    uploadImage() {
      const { image } = this;
      const body = {
           title: this.title,
        overview: this.overview,
      };
      axios
        .post(`http://127.0.0.1:3000/user/movie/${this.$route.params.username}`, {
          body,image
        })       
        .catch((err) => {
          return new Error(err.message);
        });
    },
  }, computed:{
        user(){
            return this.$store.state.users.user
        },currentUser() {
      return JSON.parse(this.$store.state.accounts.initialState.user);
    },
      
    }
    
    ,created(){
        this.$store.dispatch('getUser',this.$route.params.username)
        this.currentUser.data.username === this.$route.params.username
      ? (this.ownerLoggedIn = true)
      : (this.ownerLoggedIn = false);
    
    }

};
</script>
<style scoped>
input{
 border:1px solid #f42f42;
 border-radius:15px;
 box-shadow: #f42f42;
}
input:focus{
  outline: none;
}
#toggle-btn{
    border:none;
    background-color:#f42f42;
    color:white;
    font-weight: 700;
    border-radius: 15px;
}
.form {
    display:block
    
}
#upload{
    display:none}
</style>