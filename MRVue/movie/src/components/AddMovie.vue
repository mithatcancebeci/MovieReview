<template>
  <div class="addMovie">
 
  <div>
      <b-button id="toggle-btn" @click="toggleModal">+ Add Movie</b-button>

    <b-modal ref="my-modal" hide-footer title="Create Movie">
     <div>
      <form class="form">
      <input type="text" v-model="title" />
      <input type="text" v-model="overview" />
      <label for="upload"><Share /></label>
      <button @click="uploadImage">Save Movie</button>
     <input @change="handleImage" class="custom-input" id="upload" type="file" accept="image/*">
    </form>
    </div>
      <b-button class="mt-3" variant="outline-danger"  @click="hideModal">Close Me</b-button>
      <b-button class="mt-3" variant="outline-warning"  @click="toggleModal">Toggle Me</b-button>
    </b-modal>
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
    };
  },
  components:{Share}
  ,
  methods: {
  
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
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
  },
};
</script>
<style scoped>
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