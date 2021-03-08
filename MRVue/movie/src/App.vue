<template>
  <div id="app">
    <TopBar @event.prevent   v-if="ifShow" />
<router-view/>
</div>
</template>

<script>
import TopBar from './components/TopBar'

export default {
  name: 'App',
  components:{TopBar},
  data(){
    return{
      ifShow:true
    }
  },
  created(){
    if(this.$route.path=="/signup" || this.$route.path=="/login"){

   this.ifShow=false
    }
  }

}
</script>
    

<style>

</style>

