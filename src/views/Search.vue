<template>
  <div>
    <div>
      <input type="text" v-model="search"><br>
    <button @click='searchHandle'>搜　索</button>
    </div>
    <div>
      <ul class="song-box">
            <router-link 
            v-for="(childItem,childIndex) in searchData" 
            :key="childIndex"
            tag='li'
            :to="{name:'Player',params:{id:childItem.id,name:childItem.album.name,image:encodeURIComponent(childItem.album.artist.img1v1Url)}}"
             class="song">
              <div class="img">
                <img :src="childItem.album.artist.img1v1Url" alt />
              </div>
              <div class="song-info">
                <p class="title">{{childItem.album.name}}</p>
                <p class="author">{{childItem.artists[0].name}}</p>
              </div>
            </router-link>
          </ul>
    </div>
  </div>
</template>

<script>
export default {
name:'Search',
data(){
  return{
    search:'',
    searchData:[]

  }
},
methods:{
  searchHandle(){
    this.$api.getSearch({
       keywords: this.search
    }).then(res=>{
      // console.log(res);
      this.searchData=res.result.songs
    })
  }
}
}
</script>

<style scoped>
input{
  padding: 5px;
  margin: 10px;
  border: 1px solid #ededed;
}
button{
  margin-left:10px ;
  padding: 5px 10px;
}
.song {
  /* float: left; */
  display: flex;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 0;
}
.img {
  width: 20%;
  flex: 2;
  padding: 0 10px;
}
.song-info {
  flex: 8;
}
.title {
  font-size: 14px;
display: -webkit-box;
  overflow: hidden;  
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.author {
  font-size: 12px;
}
</style>