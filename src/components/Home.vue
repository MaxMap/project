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
        // console.log(api.root)
        this.get()
    },
    methods: {
         get(){
            this.$http({
            method:'get',
             url:this.HOST+api.homepage,
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

