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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
