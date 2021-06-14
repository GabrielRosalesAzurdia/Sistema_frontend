<template>
    <div class="nombre">
        <!-- <router-link to="/class/1">{{name.name}}</router-link> -->
        <!-- añadir unidades en forma de botones -->

    <p>
    <button class="btn" type="button" data-toggle="collapse" v-bind:data-target="'#xafe'+name.id" aria-expanded="false" aria-controls="collapseExample">
        {{name.name}}
    </button>
    </p>
    <div class="collapse" :id="'xafe'+name.id">
    <div class="card card-body">
        <div v-for="unidad in unidades" v-bind:key="unidad.name">
            <router-link :to="'/unit/'+unidad.id+'/'+unidad.name+'/'+name.id+'/'">{{unidad.name}}</router-link>
            <hr>
        </div>
    </div>
    </div>


    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Classes",
    props:{
        name: Object
    },
    data(){
        return{
            "unidades":{}
        }
    },
    mounted(){
        this.loadUnits()
    },
    methods:{
        loadUnits(){
            this.refreshTokenAndGetAccess().then( (config) => {
                axios.post('http://127.0.0.1:8000/panel/units/',{
                    "grade": [this.name.grade], 
                    "clase": [this.name.id],
                },config).then(response => {
                    this.unidades=response.data
                }).catch(e => { 
                    console.log("error en loadUnits")
                    console.log(e) 
                    this.usuario = "falló" 
                })
            })
        }
    }
}
</script>
<style scoped>
.nombre{
    font-weight:900;
}
div div a{
    text-decoration: none;
    font-weight: initial;
    color: initial;
}
</style>