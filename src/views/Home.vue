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
