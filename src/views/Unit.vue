<template>
    <div class="container">
        {{$route.params}}
        estas en unit
    </div>
</template>
<script>
export default {
    name:"Unit",
    mounted(){
        this.sayhi()
    },
    methods:{
        sayhi:function(){
            console.log("hi")
        }
    }
}
</script>