<template>
  <div>
    <tabs :currentIndex="currentIndex" @changeIndex="changeIndexHandle">
      <tab :label="title[index].title" v-for="(item,index) in tabsData" :key="index" :index="index+1" class="tab-title">
        <div>
          <ul class="song-box">
            <li v-for="(childItem,childIndex) in item.djRadios" :key="childIndex" class="song">
              <div class="img">
                <img :src="childItem.picUrl" alt />
              </div>
              <div class="song-info">
                <p class="title">{{childItem.lastProgramName}}</p>
                <p class="author">{{childItem.name}}</p>
              </div>
            </li>
          </ul>
          <router-link :to='{name:"DJMore",params:{id:title[index].id}}' tag='div' class="getMore">{{title[index].title}}加载更多</router-link>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import axios from "../../utils/request";
export default {
  name: "MusicTabs",
  data() {
    return {
      currentIndex: "1",
      tabsData:[],
      title:[
        {
          id:2,
          title:'情感故事'
        },
        {
          id:3,
          title:'情感调频'
        },
        {
          id:4,
          title:'娱乐影视'
        }
      ]

    };
  },
  methods: {
    changeIndexHandle(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    //    this.$api.getTabsData({
    //        type:2
    //    }).then(res=>{
    //        console.log(res);
    //    })
    const that = this;
    function getTabs1() {
      return that.$api.getTabsData({ type: 2 });
    }
    function getTabs2() {
      return that.$api.getTabsData({ type: 3 });
    }
    function getTabs3() {
      return that.$api.getTabsData({ type: 4 });
    }
    
    axios.all([getTabs1(),getTabs2(),getTabs3()]).then(axios.spread((dj2,dj3,dj5)=>{
        // console.log(dj2,dj3,dj5)
        this.tabsData.push(dj2,dj3,dj5)
    }))
  }
};
</script>

<style scoped>
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
.tab-title{
    font-size: 16px;
}
.getMore{
  text-align: center;
  font-size: 14px;
  line-height: 30px;
}
</style>