import Vue from 'vue'
import Router from 'vue-router'
import lonarui from '@/components/crm/lonarui'
import lonarui2 from '@/components/crm/lonarui2'
import lonarui3 from '@/components/crm/lonarui3'
import lonarui4 from '@/components/crm/lonarui4'
import Error from '@/components/crm/public/Error'
import store from '@/components/crm/store'
import vueAxios from '@/components/crm/vueAxios'
import login from '@/components/crm/login'
import listDetails from '@/components/crm/listDetails'
import shoppingCart from '@/components/crm/shoppingCart'
import shoppingList from '@/components/crm/shoppingList' //商品列表
import getParams from '@/components/crm/getParams'//参数页

Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index', 
      // 路由懒加载
      component: resolve => require(['.././components/crm/index.vue'],resolve ),//用require引入，将component分别打包成不同的js，按需加载，避免加载时间长
      // component: () => import('.././components/crm/index.vue'),
      meta: {
        title: 'index',
        keepAlive: true
      },
      beforeEnter (to,from,next) {
        console.log('进首页');
        to.meta.keepAlive = false;
        next();
      }
    },
    
    {
      path: '/lonarui',
      name: 'lonarui',
      component: lonarui,
      children: [
        {
          path: '/lonarui2',
          name: 'lonarui2',
          component: lonarui2
        },
        {
          path: '/lonarui3',
          name: 'lonarui3',
          component: lonarui3
        }
      ]
    },
    {
      path: '/lonarui4/:lisId/:listTit',
      name: 'lonarui4',
      component: lonarui4,
      beforeEnter: (to, from, next) => {
        console.log('我进入了lonarui4模板');
        console.log(to);
        console.log(from);
        console.log(next);
      }
    },
    {// 404页面
      path: '*',
      name: 'Error',
      component: Error
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    // vue-axios
    {
      path: '/vueAxios',
      name: 'vueAxios',
      component: vueAxios
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/listDetails',
      name: 'listDetails',
      component: listDetails,
      // meta: {
      //   keepAlive: false
      // }
    },
    { //购物车
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/shoppingList',
      name: 'shoppingList',
      component: shoppingList
    },
    { //测试公用组件
      path: '/getParams',
      name: 'getParams',
      component: getParams
    }
  ]
})
