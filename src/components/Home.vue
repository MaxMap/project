<template>
    <div>主页</div>
</template>
<script>
import api from '@/api/config.js'
export default {
    data() {
        return {
            
        }
    },
    created() {
        console.log(api.root)
    },
    methods: {
         get(){
            this.$http({
            method:'get',
             url:'https://cnodejs.org/api/v1/topics',
             data:{}
            }).then(function(res){
                console.log(res)
            }).catch(function(err){
                console.log(err)
            })
        }  
    },
}
</script>
<style>

</style>

