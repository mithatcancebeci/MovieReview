<template>
<div>
    <div class="profil" >
    
<div class="row" >
<div class="col-4 border-right"><ProfileDetails :user="user" /> </div>
<div class="col-4 border-right">  <CommentView v-for="reply in comments" :key="reply.id" :reply="reply" /></div>
<div><Favorite :favorite=favorites /></div>
</div>
</div>

</div>

</template>
<script>
import ProfileDetails from '../components/ProfileDetails'
import CommentView from '../components/Comments/CommentView'
import Favorite from '../components/Favorite'
export default {
    name:"Profile",
    data(){
        return{
            isAuthor:false,
        }
    },
    components:{
       ProfileDetails,CommentView,Favorite
      
    },
    computed:{
        user(){
            return this.$store.state.users.user
        }
        ,
        comments(){
            return this.$store.state.users.comments
        },
        favorites(){
            return this.$store.state.users.favorites
        }
    }
    
    ,created(){
        this.$store.dispatch('getUser',this.$route.params.username)
        this.$store.dispatch('getUserOfComments',this.$route.params.username)
        this.$store.dispatch('getFavorites',this.$route.params.username)
    }
}
</script>
<style scoped>
 
 .profil{
     align-content: center;
 }
</style>