import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.css'
import api from './api/index';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import '../node_modules/swiper/swiper.less'
import './assets/css/swiper.min.css';
import './assets/font/iconfont.css';
import Tabs from './components/tabs';
import BackTop from './components/BackTop/index';

 Vue.use(BackTop)
Vue.use(Tabs)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$api=api
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
