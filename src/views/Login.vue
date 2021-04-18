<template>
    <div>

      <br>
      <div class="container">

        <div class="text-center">
          <h1>
            Inicio de sesión
          </h1>
        </div>

        <br>

        <div class="row">
          <div class="col"></div>
          <div class="col" id="formstyle">
            <form>
              <div class="mb-3">
                <label for="authformemail" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="authformemail" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="authformpassword" class="form-label">Contraseña</label>
                <input v-model="password" type="password" class="form-control" id="authformpassword">
              </div>
              <br>
              <button @click="sendData" class="btn btn-outline-secondary">Enviar</button>
            </form>
          </div>
          <div class="col"></div>
        </div>

      </div>
      <br>

 
    </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Login",
  data(){
    return{
      email:"",
      password:"",
    }
  },
  methods: {
    showToast(type, message) {
      this.$notify({
        group: "foo",
        type: type, // puede ser warn o error o succes
        title: "Important message",
        text: message
      });
    },
    sendData(){
      event.preventDefault()
      axios.post('http://127.0.0.1:8000/login',{
        email : this.email,
        password : this.password,
      }).then(response => {
        let token = response.data
        let tokenJson = JSON.stringify(token)
        localStorage.setItem("token",tokenJson)
        this.$router.push("/")                        
        location.reload();
      }).catch(e => {
        console.log(e)
        this.showToast("error","Tu contraseña o email es incorrecto")
      })
    }
  }
};


</script>

<style scoped>
#formstyle{
padding:40px;
background-color:#F4F6F6;
}
</style>