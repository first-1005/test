<template>
  <div class="music-box">
   <div class="title-box">
       <p class="title">{{title}}</p>
       <!-- <router-link :to='`/more/${type}`' class="more">更多</router-link> -->
   </div>
   <div class="song-box">
      <router-link
         :to='`/musicdetails/${item.id}`' 
         tag='div'
         class="item" 
          v-for="(item,index) in RecommendData"
          :key="index"
          :class="{'clear-padding':index%3 !==1 }"
       >
          <div class="img-box">
              <img :src="item.picUrl" alt="">
          </div>
          <div>
              <p>{{item.name}}</p>
              <!-- <p>{{item.author}}</p> -->
          </div>
      </router-link>
   </div>
  </div>
</template>

<script>

export default {
name:'MusicListView',
data(){
    return{

    }
},
props:{
   RecommendData:{
       type:Array,
       default:function(){
           return[]
       }
   },
//    RecommendMusic:{
//         type:Array,
//        default:function(){
//            return[]
//        }
//    },
   title:{
       type:String,
       default:''
   }
},
components:{

},
methods:{
    // 设置标题字符串的长度超过八位省略...(备用)
    setStr(str){
     if(str.length>8){
         return str.substring(0,8)+'...'
     }
     return str;
    }
}
}
</script>

<style scoped>
.title-box{
    background: #fff;
    display: flex;
    position: relative;
}
.title{
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.more{
    display: inline-block;
    position: absolute;
    top:18px;
    right:10px;
}
.song-box{
    padding: 10px ;
    overflow: hidden;
    clear: both;
    background: #fff;
    margin-bottom: 10px;
}
.song-box>.item{
  float: left;
  padding: 0 10px;
  width: 31.33%;
  margin-bottom: 10px;

}

.song-box .clear-padding{
    padding:0;
}
.item p{
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>