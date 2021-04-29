<template>
  <div id="app">
    <notifications group="foo"/>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div class="container-fluid">
        <span class="navbar-brand" href="#">ANEO</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" v-if="!userLoged">    
            <li class="nav-item">
              <router-link to="/" class="nav-link btn btn-light" aria-current="page">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link btn btn-light" aria-current="page">Login</router-link>
            </li>
          </ul>
          <ul class="navbar-nav" v-else>
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link btn btn-light" aria-current="page">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/panel" class="nav-link btn btn-light" aria-current="page">Panel</router-link>
            </li>
            <li class="nav-item">
              <span id="spanCerrar" class="nav-link btn btn-light" aria-current="page" @click="closeSesion()">Cerrar</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name:"App",
  mounted(){
    this.authUser()
  },
  data(){
    return{
      "userLoged":false,
    }
  },
  methods:{
    authUser(){
      if(localStorage.getItem("token")){
        //  try{
        //    let token = localStorage.getItem("token")
        //    token = JSON.parse(token)
        //    var config = {
        //      "headers": {
        //      "Authorization":"Token "+token.token,
        //      }
        //    }
        //    axios.get('http://127.0.0.1:8000/accounts/api-token-auth/',config).then(response => {
        //      this.user = response.data
        //      this.userLoged = true
        //    }).catch(e => { console.log(e) })
        //   }
        //   catch(e){
        //     console.log(e)
        //   } 
        this.userLoged = true
      }
    },
    closeSesion:function(){
      localStorage.removeItem("token")
      this.userLoged = false
      this.$router.push("/")                        
      location.reload();
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1949e6;
}
</style>
<style scoped>
  #spanCerrar{
    font-weight: bold;color:
  #2c3e50;
}
</style>