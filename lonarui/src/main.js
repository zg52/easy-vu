// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import  vuex  from 'vuex'
import store from './assets/js/store'
import http from  './assets/js/http' //全局axios -->$http
// css
import './assets/css/reset.css'   //全局reset
import './assets/css/index.css' //首页
import './assets/css/iconfont.css'   //全局icon
import './assets/css/public.less' //全局less
import './assets/css/header_z.css'//页头css
import './assets/css/footer.css'//页底css
import './assets/css/index_z.css' //非首页公用css

Vue.config.productionTip = false
Vue.use(vuex)
Vue.prototype.$http = http;//封装的http
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})