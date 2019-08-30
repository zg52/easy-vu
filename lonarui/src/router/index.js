import Vue from 'vue'
import Router from 'vue-router'
import lonarui from '@/components/lonarui'
import lonarui2 from '@/components/lonarui2'
import lonarui3 from '@/components/lonarui3'
import lonarui4 from '@/components/lonarui4'
import Error from '@/components/Error'
import store from '@/components/store'
import vueAxios from '@/components/vueAxios'
import login from '@/components/login'
import list from '@/components/list'

// start

// import head_first from '@/components/public/head_first'
import index from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [
        {
          path:'/',
          name: 'index',
          component: index,
        },
    {
      path: '/lonarui',
      name: 'lonarui',
      component: lonarui,
      children :[
        {
      path: '/lonarui2',
      name: 'lonarui2',
      component: lonarui2
    },
    {
      path:'/lonarui3',
      name:'lonarui3',
      component:lonarui3

    }
  ]
    },
    {
      path:'/lonarui4/:lisId/:listTit',
      name:'lonarui4',
      component:lonarui4,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了lonarui4模板');
        console.log(to);
        console.log(from);
        console.log(next);
      }
    },


    {// 404页面
      path:'*',
      name:'Error',
      component:Error
    },
    {
      path:'/store',
      name:'store',
      component:store
      },
      // vue-axios
      {
        path:'/vueAxios',
        name:'vueAxios',
        component:vueAxios
      },
      {
        path:'/login',
        name:'login',
        component:login
      },
      {
        path:'/list',
        name:'list',
        component:list
      }
  ]
})
