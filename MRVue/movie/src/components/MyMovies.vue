<template>
  <div>
 
  <div>
      <b-button id="toggle-btn" @click="toggleModal">My Movies</b-button>

    <b-modal ref="my-modal" hide-footer title="Create Movie">
     <div>
       <div class="card"  v-for="movie in $attrs.myMovies" :key="movie.id" >
   <div class="card-body" >
        <span class="movieImage"><DefaultImage :profileImage=movie.poster_path /></span> 
        <span class="card-title">{{movie.title}}</span>
        <span class="card-title overview">{{movie.overview}}</span>
      
  </div>
   </div>
   
    </div>
      <b-button class="mt-3" variant="outline-danger"  @click="hideModal">Close Me</b-button>
      <b-button class="mt-3" variant="outline-warning"  @click="toggleModal">Toggle Me</b-button>
    </b-modal>
  </div>

  
  </div>
</template>
<script>
import Share from './icons/Share'
import DefaultImage from './DefaultImage'
export default {

  components:{Share,DefaultImage}
  ,
  props:[{
    myMovies:[
      {
        type:Array,
        required:true
      }
    ]
  }],
  methods: {
  
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
  
   
  },
};
</script>
<style scoped>
.overview{
  display:none
}

.movieImage>img{
    width: 152px;
    border-radius:15px;
}
#toggle-btn{
     border:none;
     background-color: white;
     color:#98a6ad
 
}

</style>