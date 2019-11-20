<template>
  <div id="app">
	  <crm_head></crm_head>
  <crm_base></crm_base>
  <transition 
  :name="transitionName"
   @after-enter="afterEnter"
   appear
   :duration="{ enter: 500, leave: 600 }"
   mode="out-in"
   >
   <router-view/>
  </transition>
  </div>    
</template>
<script>
import crm_head from './components/crm/public/crm_head.vue'
import crm_base from './components/crm/public/crm_base.vue'
import { WOW } from "wowjs"; //配合animate.css 使用
export default {
  data() {
    return {
      transitionName: 'fade'
    }
  },
	components:{
		crm_head,
		crm_base
  },
  methods: {
     afterEnter(el){
        console.log('动画进入之后');
        el.style.background='rgb(252, 252, 252)';
    },
  //    beforeEnter(el){
  //       console.log('动画enter之前');
  //   },
  //   enter(el){
  //       console.log('动画enter进入');
  //   },
  //   beforeLeave(el){
  //       console.log('动画leave之前');
  //   },
  //   leave(el){
  //       console.log('动画leave');
  //   },
  //   afterLeave(el){
  //       console.log('动画leave之后');
  //       el.style.backgroun
  // }
  },
  mounted() {
     new WOW().init();


    //  捕获异常
    window.onerror = function(message, source, lineno, colno, error) {
   console.log('捕获到异常：',{message, source, lineno, colno, error});
}
window.addEventListener('error', (error) => {
    console.log('捕获到异常：', error);
}, true)
  },
    watch: {
  "$route": function(to,from){
    if(to.path == '/listDetails'){//如果跳到登录页，就启用slide-left类名的动画
      this.transitionName='slide-fade';
    } 
  }
}
}
</script>
<style>
/* 全局设置路由切换动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.slide-left-enter-active{
  animation: slideInLeft .5s reverse;
} 
.slide-left-leave-active{
  animation: slideOutLeft .5s reverse;
}
.slide-right-enter-active{
  animation: slideInRight .5s reverse;
} 
.slide-right-leave-active{
  animation: slideOutRight .5s reverse;
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
