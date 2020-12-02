<template>
  <div v-show="show" class="back-top" @click='goTop'>
    <span class="back"></span>
  </div>
</template>

<script>
export default {
name:'BackTop',
data(){
    return{
        show:false
    }
},
created(){
    const clientH=document.documentElement.clientHeight;
    window.addEventListener('scroll',()=>{
        let scrollH=document.documentElement.scrollTop;
        if(clientH < scrollH){
            this.show=true
        }else{
            this.show=false
        }
    })
},
methods:{
    goTop(){
        document.documentElement.scrollTop=0
    }
}
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 15px;
  bottom: 104px;
  height: 39px;
  width: 80px;
  z-index: 0;
  opacity: 0.8;
    text-align: right;
}
.back{
  display: inline-block;
  background: url('../../assets/img/fanhui.jpg') no-repeat;
  background-size: 39px 39px;
  width: 39px;
  height: 39px;
}
</style>