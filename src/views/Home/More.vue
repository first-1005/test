<template>
  <div>
    <div class="header">
      <router-link to="/" class="goback" >&lt;</router-link>
      <h3>更多音乐</h3>
    </div>
    <div class="song-box">
      <div
        class="item"
        v-for="(item,index) in musicList"
        :key="index"
        :class="{'clear-padding':index%3 !==1 }"
      >
        <div class="img-box">
          <img :src="item.pic_big" alt />
        </div>
        <div>
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
        </div>
      </div>
    </div>
    <div ref="loadmore">加载更多</div>
  </div>
</template>

<script>
export default {
  name: "More",
  data() {
    return {
      musicList: [],
      offset: 0,
      flag: true
    };
  },
  mounted() {
    // 第一次加载数据
    this.http(this.offset);
    // 触底加载更多
    const clientH = document.documentElement.clientHeight;
    //  const docHeight=this.$refs.loadmore;
    var scr = () => {
      if(this.$refs.loadmore){
        if (
        clientH + document.documentElement.scrollTop >=this.$refs.loadmore.offsetTop &&this.flag
      ) {
        this.flag = false;
        //  console.log('滚动了');
        //  网略请求新数据
        this.http(this.offset);
      }
      }
    };
    // 绑定全局的滚动事件
    window.addEventListener("scroll", scr);
     


    //  老师讲的方法：
    // var timer = null;
    //   const winHeight = document.documentElement.clientHeight;
    //     window.addEventListener("scroll", () => {
    //         if (this.$refs.loadmore) {
    //             let currentHeight = this.$refs.loadmore.getBoundingClientRect()
    //                 .top;
    //             if (timer) {
    //                 clearTimeout(timer);
    //             }
    //             timer = setTimeout(() => {
    //                 if (winHeight > currentHeight) {
    //                     this.http(this.offset);
    //                 }
    //             }, 300);
    //         }
    //     });
  },
  methods: {
    http(offset) {
      this.$api
        .getMusicList({
          method: "baidu.ting.billboard.billList",
          type: this.$route.params.type,
          size: 15,
          offset: offset
        })
        .then(res => {
          // console.log(res);
          if (res.song_list) {
            this.musicList.push(...res.song_list), 
            this.offset += 15;
            //  将flag该为true
            this.setFlag(true);
            // console.log(this.flag);
            
          } else {
            this.$refs.loadmore.innerHTML = "做音乐也是有底线的~~~~~";
          }
        });
    },
    setFlag(type) {
      this.flag = type;
    },
    // clearEvent(){
    //   window.removeEventListener('scroll',scr);
    // }
  },

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
}
.song-box {
  padding: 10px;
  overflow: hidden;
  clear: both;
  background: #fff;
  margin-bottom: 10px;
}
.song-box > .item {
  float: left;
  padding: 0 10px;
  width: 31.33%;
  margin-bottom: 10px;
}

.song-box .clear-padding {
  padding: 0;
}
.item p {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>