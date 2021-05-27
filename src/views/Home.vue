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
        por favor inica sesión
      </p>
    </div>
      {{texto_prueba}}
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

import axios from "axios"

export default {
  name: "Home",
  data(){
    return{
      texto_prueba:""
    }
  },
  methods:{
    // prueba(){
    //   this.refreshToken()
    //   let config = this.getAccessToken()
    //   axios.get("http://127.0.0.1:8000/panel/prueba/",config).then(response => {
    //     this.texto_prueba = response
    //   })
    // }
  }
}
</script>
