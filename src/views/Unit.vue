<template>
    <div class="container">

        <br>
        <div class="row gx-5 text-left">
            <div class="col">
                <div class="p-3">
                   <h2>
                       {{$route.params.unidad_name}}
                   </h2>
                </div>
            </div>
        </div>
        <hr>

        <div class="row text-left gx-5" v-for="score in scores" v-bind:key="score.name">
            <div class="col">
                <button class="btn btn-outline-dark btn-lg">
                    {{score.name}}
                </button> 
            </div>
        </div>
        <br>
        {{scores}}

        tengo que añadir wea visiual a este apartado y hacer la view de los
        estudiantes con sus notas, tengo que trabajar en el backend 
        añadiendo el modelo de trabajos ya que scores es independiente


    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Unit",
    data(){
        return{
            "scores":""
        }
    },
    mounted(){
        this.loadScores()
    },
    methods:{
        loadScores(){
            this.refreshTokenAndGetAccess().then( (config) => {
                axios.post('http://127.0.0.1:8000/panel/scores/',{
                    "unit": [this.$route.params.unidad_id], 
                    "grade": [this.$route.params.grado_id],
                },config).then(response => {
                    this.scores=response.data
                }).catch(e => { 
                    console.log("error en loadScores")
                    console.log(e) 
                    this.usuario = "falló" 
                })
            })
        }
    }
}
</script>