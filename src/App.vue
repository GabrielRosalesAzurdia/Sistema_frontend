<template>
  <div id="app">
    <notifications group="foo"/>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">ANEO</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="!userLoged">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            <router-link to="/" class="nav-link btn btn-light" aria-current="page">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link btn btn-light" aria-current="page">Login</router-link>
          </li>
        </ul>

        <ul class="navbar-nav mr-auto" v-else>
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
    </nav>

    <router-view/>
  </div>
</template>

<script>

export default {
  name:"App",
  mounted(){
    this.chekingUser()
  },
  data(){
    return{
      "userLoged":false,
    }
  },
  methods:{
    // Verifica si hay un usuario logiado con token access y token refresh
    chekingUser: async function (){
        try{
          let x = await this.refreshTokenAndGetAccess()
          console.log(x)
          this.userLoged = this.checkUser()
        }
        catch(e){
          console.log(e)
          this.closeSesion()
        }
    },
    // Cierra la sesión
    closeSesion:function(){
      localStorage.removeItem("tokenAccess")
      localStorage.removeItem("tokenRefresh")
      localStorage.removeItem("userName")
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
@import'~bootstrap/dist/css/bootstrap.css'
</style>