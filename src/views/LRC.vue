<template>
  <div class="lrcContainer">
      <div class="lrc" ref='lrc'>
         <p v-for="(item,key,index) in lrcData" :key="index" class="lrc-p" :class="{'active':currentTime>allKeys[index] && currentTime<allKeys[index+1]}">
             <span >{{item}}{{scrollLrc(index)}}</span>
             </p>
      </div>
  </div>
</template>

<script>
export default {
name:'LRC',
data(){
    return{
      lrcData:'',
      allKeys:[]
    }
},
props:{
    id:{
        type:[String,Number],
        required:true
    },
    currentTime:{
        type:[String,Number],
        default:0
    }
},
mounted(){
    this.$api. getLRCData({
        id:this.id
    }).then(res=>{
        console.log(res);
        this.lrcData=res.lrc.lyric
        this.FilterLrc(res.lrc.lyric)
    })
},
methods:{
    // 处理歌词
    FilterLrc(values){
      if(!values) return;
      var lrc={}
      var lyrics=values.split('\n');
      var reg=/\[\d*:\d*(\.|:)\d*]/g
      for(var i=0;i<lyrics.length;i++){
           var timeregArr=lyrics[i].match(reg)
           if(!timeregArr) continue;
        //    获取歌词
           var content=lyrics[i].replace(timeregArr,'');
        //    获取时间
        var t=timeregArr[0]
        var min=parseInt(t.match(/\[\d*/i).toString().slice(1));
        var sec=parseInt(t.match(/\:\d*/i).toString().slice(1));
        var timer=min*60+sec;
        lrc[timer]=content;
      }
      this.lrcData=lrc
      this.getAllkeys(lrc)
    //   console.log(this.lrcData);
    },

    getAllkeys(lrcArr){
     for(var key in lrcArr){
         this.allKeys.push(key)
     }
    },
    scrollLrc(index){
     if(this.currentTime>this.allKeys[index] && this.currentTime<this.allKeys[index+1]){
         this.$refs.lrc.style.top= -(30*(index-2))+'px'
     }
    }
}
}
</script>

<style scoped>
.active {
    color: red ;
    border-bottom: none;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
    text-align: center;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
    text-align: center;
}

.lrc-p {
    height: 30px;
    line-height: 30px;

}

.up30 {
    margin-top: -30px;
}
</style>