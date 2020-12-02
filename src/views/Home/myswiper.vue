<template>
  <div>
     <swiper ref="mySwiper" :options="swiperOptions">
     <swiper-slide v-for="(item,index) in swiperData" :key='index'>
      <img :src="item" alt="">
      </swiper-slide> 
    <div class="swiper-pagination" slot="pagination"></div> 
  </swiper>
  </div>
</template>

<script>
export default {
name:'mySwiper',
 data(){
    return{
       swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
          autoplay:true,
          
        },
        // 在vue中，在js中引入静态资源，需要require进来
        swiperData:[require('../../assets/img/b1.jpg'),require('../../assets/img/b2.jpg'),require('../../assets/img/b3.jpg')]
    }
  },

}
</script>

<style scoped>
img{
  width: 100%;
  /* height: 200px; */
}
</style>