<template>
  <div>
      <div class="header">
      <router-link to="/" class="goback" >&lt;</router-link>
      <h3>更多音乐</h3>
    </div>
      <div class="song-box">    
      <router-link
          tag='div'
          :to='`/player/${item.id}/${item.name}/${encodeURIComponent(item.al.picUrl)}`'
          class="item" 
          v-for="(item,index) in MusicData"
          :key="index"
          :class="{'clear-padding':index%3 !==1 }"
       >
          <div class="img-box">
              <img :src="item.al.picUrl" alt="">
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
name:'MusicDetails',
data(){
    return{
      MusicData:[]
    }
},
mounted(){
    //歌曲详情  
   this.$api.getMusic({
       id: this.$route.params.id 
   }).then(res=>{
      //  console.log(res);
       this.MusicData=res.data.playlist.tracks
    //    this.rockTitle=res.billboard.name
   })
}
}
</script>

<style scoped>
.header {
  line-height: 28px;
  font-size: 20px;
  text-align: center;
  position: relative;
}
.header > h3 {
  display: inline-block;
  padding: 10px 0;
}
.goback {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #666;
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