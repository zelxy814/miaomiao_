import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
Vue.config.productionTip = false
// 通过this的方式调用axios
Vue.prototype.axios = axios;
// 加载图片时处理图片大小
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});
import Scroll from '@/components/Scroll'
import Loading from '@/components/Loading'
// 注册全局组件,其他组件不用再引入就使用了
Vue.component('Scroll',Scroll);
Vue.component('Loading',Loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
