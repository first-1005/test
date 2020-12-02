<template>
  <div>
      <div class="header">
        <router-link to='/'>
          <i class="iconfont shouye ">&#xe605;</i>
        </router-link>
        <p class="songname">{{$route.params.name}}</p>
        <router-link to='/search'>
          <i class="iconfont">&#xe650;</i>
        </router-link>
      </div>
      <div>
        <img :src="getUrl" alt="">
      </div>
      <div class="song-box">
        <i class="iconfont shoucang  ">&#xe613;</i> 
        <i class="iconfont xiazai">&#xe723;</i>
      </div>
      <div>
        <LRC :id='$route.params.id' :currentTime='currentTime'/>
         <div  class="bofang">
           <audio  ref='player' controls  :src="playerData.url" ></audio>
         </div>
      </div>
  </div>
</template>

<script>
import LRC from './LRC'
export default {
name:'Player',
data(){
  return{
   playerData:[],
   currentTime:0
  }
},
components:{
  LRC
},
beforeDestory(){
   this.removeEventHandle()
},
mounted(){
  this.$api.getPlayer({
    id:this.$route.params.id
  }).then(res=>{
    // console.log(res);
     this.playerData=res.data[0]
    //  console.log(playData);
  })
  this.addEventHandle();
     
},
computed:{
  getUrl(){
    return decodeURIComponent(this.$route.params.image)
  }
},
methods:{
 
  addEventHandle(){
      this.$refs.player.addEventListener('timeupdate',this.currentTimeHandle)
  },
  currentTimeHandle(){
    this.currentTime= this.$refs.player.currentTime
  },
  removeEventHandle(){
      this.$refs.player.removeEventListener('timeupdate',this.currentTimeHandle)
  }
  
}
}
</script>

<style scoped>
.header{
  display: flex;
  background: #fff;
  padding: 10px;
}

.header i{
  width: 10%;
  display: inline-block;
  font-size: 24px ;
  color: #666;
}
.songname{
  flex: 1;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  /* padding-top: 30px; */
}
img{
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
.song-box{
  /* display: flex; */
  text-align: center;
  padding: 10px;
  overflow: hidden;
  clear: both;
}
.song-box i{
  font-size: 20px;
  width: 10%;
  padding-top: 10px;
}
.bofang{
  padding-left:10%;
}
.xiazai{
  float: right;
}
.shoucang{
  float: left;
}
</style>