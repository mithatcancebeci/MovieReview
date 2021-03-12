<template>
<div>
    <img :src="tempImage" :alt="2">
</div>
</template>
<script>
export default {
    data(){
        return{
       tempImage:''
        }
    }
    ,props:['profileImage']
    ,
    created(){
      
        if(this.profileImage===undefined)  { 
        this.tempImage=''
        return this.tempImage=require('../assets/download.png')
        }
        else{
            this.tempImage=''
           return this.tempImage=require(`../../../../uploads/${this.tempImage}`)
            
        }
        
    }
}
</script>