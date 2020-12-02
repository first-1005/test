<template>
  <div>
    <MusicListView  :RecommendData='RecommendData' title='推荐歌单'/>
    <!-- <MusicListView /> -->
    <RecommendMusic :RecommendData='RecommendMusic' title="推荐歌曲"/>
  </div>
</template>

<script>
import MusicListView from './MusicListView';
import RecommendMusic from './RecommendMusic';
export default {
name:'MusicList',
data(){
    return{
     RecommendData:[],
     RecommendMusic:[]
    }
},
components:{
    MusicListView,
    RecommendMusic
},
created(){
    // 推荐歌单
   this.$api.getRecommend().then(res=>{
    //    console.log(res);
       this.RecommendData=res.recommend
    //    this.newTitle=res.billboard.name
   })
   // 推荐歌曲 
   this.$api.getRecommendMusic().then(res=>{
    //    console.log(res);
       this.RecommendMusic=res.result
    //    this.hotTitle=res.billboard.name
   })
   
}
}
</script>

<style>

</style>