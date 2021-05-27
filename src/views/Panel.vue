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
            this.refreshToken()
            let config = this.getAccessToken() 
            axios.get('http://127.0.0.1:8000/accounts/user',config).then(response => {
            this.usuario = response.data
            }).catch(e => { 
                console.log(e) 
                this.usuario = "falló"
            })
        }
    }
}
</script>