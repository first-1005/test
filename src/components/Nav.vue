<template>
  <div>
      <ul class="title">
          <li><router-link exact to='/'>首页</router-link></li>
          <li><router-link to='/topic'>榜单</router-link></li>
          <li><router-link to='/mine'>我的</router-link></li>
          <li><router-link to='/search'>搜索</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
name:'Nav'
}
</script>

<style scoped >
.title{
  overflow: hidden;
  clear: both;
}
.title>li>a{
    float: left;
    width: 25%;
    font-size: 16px ;
    /* font-weight: bold; */
    line-height: 50px;
    background: #fff;
    text-align: center;
}
    .active{
      border-bottom: 2px solid red;
    }
</style>