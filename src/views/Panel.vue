<template>
    <div class="container">
        <br>
        
        <div class="row gx-5 fade-in-div">
            <div class="col">
                <div class="p-3">
                    <h2>
                        Panel de Notas
                    </h2>
                </div>
            </div>
        </div>

        <div class="row gx-5 fade-in-div">
            <div class="col">
                <div class="p-3">

                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Grados</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="grado in grados" v-bind:key="grado">
                        <td v-on:click="selectedGrade(grado.id)">{{grado.name}}</td>
                        </tr>
                    </tbody>
                    </table>

                </div>
            </div>
            <div class="col">
                <div class="p-3">
                    <classes :name="clases" key="asd"></classes>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Classes from '@/components/Classes.vue'
import axios from "axios"

export default {
    name:"Panel",
    components:{
        Classes
    },
    data(){
        return{
            "grados":"",
            "clases":"",
        }
    },
    mounted(){
        this.getGrades()
    },
    methods:{
        getGrades(){
            this.refreshTokenAndGetAccess().then( (config) => {
                axios.get('http://127.0.0.1:8000/panel/grades/',config).then(response => {
                 this.grados = response.data
                }).catch(e => { 
                    console.log("error en getGrades")
                    console.log(e) 
                    this.usuario = "falló"
                })
            })
        },
        selectedGrade(gradeid){
            this.refreshTokenAndGetAccess().then( (config) => {
                axios.post('http://127.0.0.1:8000/panel/classes/',{
                    "grade": [gradeid] 
                },config).then(response => {
                    console.log(response)
                    this.clases=response
                    //no mames ya funciono ahora tengo que completar el componente y hacer la magia con un fade in
                }).catch(e => { 
                    console.log("error en selectedGrade")
                    console.log(e) 
                    this.usuario = "falló" 
                })
            })
        }
    }
}

</script>

<style scoped>
.fade-in-div {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>