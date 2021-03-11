<template>
<div>
    <div class="profil" >
    
<div class="row" >
<div class="col-4 border-right"><ProfileDetails :user="user"/> </div>
<div class="col-4 border-right">Comment</div>

</div>
</div>

</div>

</template>
<script>
import ProfileDetails from '../components/ProfileDetails'

export default {
    name:"Profile",
    data(){
        return{
            isAuthor:false,
        }
    },
    components:{
       ProfileDetails,
      
    },
    computed:{
        user(){
            return this.$store.state.users.user
        }
    }
    
    ,created(){
        this.$store.dispatch('getUser',this.$route.params.username)
    }
}
</script>
<style scoped>
 
 .profil{
     align-content: center;
 }
</style>