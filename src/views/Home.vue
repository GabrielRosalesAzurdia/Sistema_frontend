<template>
  <div>

    <div class="jumbotron">
      <h1>
        ANEO
      </h1>
    </div>

    <div class="container">
      <p>
        Bienvenido al ANEO (Adminstrador de Notas de Estudiantes Online)
      </p>
      <p>
        {{texto_prueba}}
      </p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }

// Guia de como hacer peticiones con la función token:
// console.log(localStorage.getItem("tokenAccess"))
// this.refreshTokenAndGetAccess().then( (config) => {
//     console.log("entro en la promesa de refresh")
//     console.log(config)
//     axios.get('http://127.0.0.1:8000/accounts/user/',config).then(response => {
//     this.usuario = response.data
//     }).catch(e => { 
//         console.log("aquí va el error")
//         console.log(e) 
//         this.usuario = "falló"
//     })
// })

export default {
  name: "Home",
  mounted(){
    this.chekingUser()
  },
  data(){
    return{
      texto_prueba:"por favor inicia sesión"
    }
  },
  methods:{
    chekingUser(){
      if(this.checkUser()){
        this.texto_prueba = "Gracias por iniciar sesión!"
      }
    }
  }
}
</script>
