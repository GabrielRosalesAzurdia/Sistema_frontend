<template>
  <div id="app">
    <notifications group="foo"/>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ANEO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" v-if="!userLoged">    
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link" aria-current="page">Login</router-link>
            </li>
          </ul>
          <ul class="navbar-nav" v-else>
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/panel" class="nav-link" aria-current="page">Panel</router-link>
            </li>
            <li class="nav-item">
              <span class="nav-link" aria-current="page" @click="closeSesion()" style="font-weight: bold;color: #2c3e50;">Cerrar</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name:"App",
  mounted(){
    this.authUser()
  },
  data(){
    return{
      "userLoged":false,
      "user":""
    }
  },
  methods:{
    authUser(){
      try{
        let token = localStorage.getItem("token")
        token = JSON.parse(token)
        console.log(token.token)
        var config = {
          "headers": {
          "Authorization":"Token "+token.token,
          }
        }
        axios.get('http://127.0.0.1:8000/accounts/user',config).then(response => {
          this.user = response.data
          this.userLoged = true
        }).catch(e => { console.log(e) })
      }
      catch(e){
        console.log(e)
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
