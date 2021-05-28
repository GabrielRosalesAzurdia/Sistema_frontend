<template>
    <div>
        {{usuario}}
    </div>
</template>

<script>
import axios from "axios"

export default {
    name:"Panel",
    data(){
        return{
            "usuario":""
        }
    },
    mounted(){
        this.getUser()
    },
    methods:{
        getUser(){
            
            console.log(localStorage.getItem("tokenAccess"))
            this.refreshTokenAndGetAccess().then( (config) => {
                console.log("entro en la promesa de refresh")
                console.log(config)
                axios.get('http://127.0.0.1:8000/accounts/user/',config).then(response => {
                this.usuario = response.data
                }).catch(e => { 
                    console.log("aquí va el error")
                    console.log(e) 
                    this.usuario = "falló"
                })
            } )
        }
    }
}
</script>