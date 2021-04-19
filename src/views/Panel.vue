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
            let token = localStorage.getItem("token")
            token = JSON.parse(token)
            console.log(token.token)
            var config = {
                "headers": {
                "Authorization":"Token "+token.token,
                }
            }
            axios.get('http://127.0.0.1:8000/accounts/user',config).then(response => {
            this.usuario = response.data
            }).catch(e => { 
                console.log(e) 
                this.usuario = "chamadre"
            })
        }
    }
}
</script>