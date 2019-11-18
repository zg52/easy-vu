// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import  vuex  from 'vuex'
import store from './assets/js/store'
import http from  './assets/js/http' //全局axios -->$http
import Mock from './mock/mock'//全局模拟数据
import eventUntil from './assets/js/eventUntil' //全局事件侦听工具
import ElementUI from 'element-ui';

// css
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/iconfont.css'   //全局icon
import './assets/css/reset.css'   //全局reset
// import './assets/css/public.less' //全局less
import './assets/css/index.css' //首页
import './assets/css/footer.css'//页底css
import './assets/css/animate.css'  

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vuex)
Vue.prototype.$http = http;//封装的http
Vue.prototype.$ajax = axios;
Vue.prototype.$eventUntil = eventUntil; //在vu原型上(全局)启用事件侦听器工具
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
