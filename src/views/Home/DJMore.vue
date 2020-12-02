<template>
  <div>
    <div class="header">
      <router-link to="/" class="goback">&lt;</router-link>
      <h3>更多音乐</h3>
    </div>
    <ul class="song-box">
      <li v-for="(childItem,childIndex) in DJData" :key="childIndex" class="song">
        <div class="img">
          <img :src="childItem.picUrl" alt />
        </div>
        <div class="song-info">
          <p class="title">{{childItem.lastProgramName}}</p>
          <p class="author">{{childItem.name}}</p>
        </div>
      </li>
    </ul>
    <div ref='more' class="more">加载更多</div>
  </div>
</template>

<script>
export default {
  name: "DJMore",
  data() {
    return {
      DJData: [],
      hasMore: false
    };
  },
  mounted() {
    this.http();

    //   加载更多
    var timer=null;
    // 视口高度
    const clientH=document.documentElement.clientHeight;
    window.addEventListener('scroll',()=>{
        // ref距离顶部的相对高度
        if(this.$refs.more){
        let scrollH=this.$refs.more.getBoundingClientRect().top;
            if(timer){
                clearTimeout(timer)
            }
            timer=setTimeout(() => {
                if(clientH>scrollH){
                // 加载更多
                  if(this.hasMore){
                      this.http()
                  }else{
                      this.$refs.more.innerHTML='做音乐也是有底线的~~~'
                  }
            }
            }, 300);
        }
    })
  },
  methods:{
      http(){
         this.$api
      .getTabsData({
        type: this.$route.params.id
      })
      .then(res => {
        // console.log(res);
        this.DJData.push(...res.djRadios);
        this.hasMore = res.hasMore;
      });
      }
  }
};
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
  border: none;
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
  flex: 3;
  padding: 0 10px;
}
.song-info {
  flex: 7;
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
.tab-title {
  font-size: 16px;
}
.more{
    text-align: center;
    /* font-size: 12px; */
}
</style>