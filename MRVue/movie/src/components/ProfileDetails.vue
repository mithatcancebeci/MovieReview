<template>
  <div class="container">
    <div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
          </div>
          <div class="row">
            <div class="col">
              <div class="text-center card-box">
                <div class="member-card pt-2 pb-2">
                  <br /><br /><br /><br />
                  <div class="thumb-lg member-thumb mx-auto">
                  <div class="file">
   <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div class="fields">
        <label>Upload File</label><br/>
        <input 
          type="file"
          ref="file"
          @change="onSelect"
        />
      </div>
      <div class="fields">
        <button>Submit</button>
      </div>
      <div class="message">
        <h5>{{message}}</h5>
      </div>
   </form>
  </div>
                  </div>
                  <div>
                    
                    <ProfileImageWithDefault :profileImage=user.image />
                    <h4>{{ user.username }}</h4>
                    <h4>{{ user.displayName }}</h4>
                   

                  </div>

                  <div class="">
                    <p class="text-muted"><span> </span><span></span></p>
                  </div>
                  <ul class="social-links list-inline">
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Edit Profile
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Add Movies
                  </button>
                  <div class="mt-4">
                    <div class="row">
                      <div class="col-4">
                        <div class="mt-3">
                          <h4>2563</h4>
                          <p class="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-3">
                          <h4>6952</h4>
                          <p class="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-3">
                          <h4>1125</h4>
                          <p class="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileImageWithDefault from './ProfileImageWithDefault'
import axios from "axios";
export default {
  name: "ProfileDetail",
  data() {
    return {
      file:"",
      message:""
    };
  },

  props: ["user"],
  components:{ProfileImageWithDefault},
  methods: {
  onSelect(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if(!allowedTypes.includes(file.type)){
        this.message = "Filetype is wrong!!"
      }
      if(file.size>500000){
        this.message = 'Too large, max size allowed is 500kb'
      }
    },
    async onSubmit(){
      const formData = new FormData();
      formData.append('file',this.file);
      try{
        await axios.post(`http://localhost:3000/user/${this.$route.params.username}`,formData);
        this.message = 'Uploaded!!'
      }
      catch(err){
        console.log(err);
        this.message = err.response.data.error
      }
    }
  }, 
}
</script>
<style scoped>
body {
  background: #dcdcdc;
  margin-top: 20px;
}
.card-box {
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: #fff;
}
.social-links li a {
  border-radius: 50%;
  color: rgba(121, 121, 121, 0.8);
  display: inline-block;
  height: 30px;
  line-height: 27px;
  border: 2px solid rgba(121, 121, 121, 0.5);
  text-align: center;
  width: 30px;
}
.social-links li a:hover {
  color: #797979;
  border: 2px solid #797979;
}
.thumb-lg {
  height: 88px;
  width: 88px;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
.btn-rounded {
  border-radius: 2em;
}
.text-muted {
  color: #98a6ad !important;
}
h4 {
  line-height: 22px;
  font-size: 18px;
}
</style>
