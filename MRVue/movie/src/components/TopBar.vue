<template>
 <div>
  <b-navbar toggleable="lg" type="dark" >
    <b-navbar-brand href="#"><Logo /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
  <b-navbar-nav>
        <router-link to="/">Home</router-link>
         <UserCard :currentUser=currentUser />
      </b-navbar-nav>


       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import Logo from "./icons/Logo";
import UserCard from "./UserCard";
export default {
  data() {
    return {
         ifShow:true
    };
  },
  components: { Logo, UserCard },
  mounted(){
    if(this.currentUser!=null){
    this.ifShow=false
    }
  },
 computed:{
  currentUser(){
    return JSON.parse( this.$store.state.accounts.initialState.user)
    }
  }
};
</script>
<style scoped>
a {
  padding: 10px;
  color: #f42f42;
  font-weight: 700;
  text-decoration: none;
}
a:hover {
  padding: 10px;
  color: white;
  border: 0px solid #f42f42;
  background-color: #f42f42;
  border-radius: 5px;
  text-decoration: none;
}
</style>
