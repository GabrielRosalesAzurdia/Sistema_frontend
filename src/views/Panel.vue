<template>
    <div class="container">
        <br>
        
        <div class="row gx-5">
            <div class="col">
                <div class="p-3 border bg-light">Panel de notas</div>
            </div>
            <div class="col">
                <div class="p-3 border bg-light">Bienvenido {{usuario}}</div>
            </div>
        </div>

    </div>
</template>

<script>
//import axios from "axios"

export default {
    name:"Panel",
    data(){
        return{
            "usuario":""
        }
    },
    mounted(){
        this.getUsername()
    },
    methods:{
        getUsername(){
            this.usuario = JSON.parse(localStorage.getItem("userName"))
        }
    }
}

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
            // } )

</script>

