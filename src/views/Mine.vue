<template>
  <div>
       <input type="text" v-model="username"><br><br>
      <input type="password" v-model="password"><br><br>
      <router-link tag='button' to='/' @click='loginHandle'>登录</router-link>
  </div>
</template>

<script>
export default {
name:"Mine",
data(){
  return{
    username:'',
    password:''
  }
},
methods:{
    loginHandle(){
      this.$api.login({
        phone:this.username,
        password:this.password
      }).then(res=>{
          // console.log(res);
          
      })
    }
}
}
</script>

<style scoped>
 input{
   border: 1px solid green;
   padding: 10px;
 }
</style>