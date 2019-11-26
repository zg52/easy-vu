<template>
  <div id="app">
    <crm_head></crm_head>
    <crm_base></crm_base>
    <!-- 不需要刷新的路由配置里面配置 -->
 
      <keep-alive>
<router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
   

 
      <!-- 需要刷新的路由配置里面配置 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
 
  </div>
</template>
<script>
import crm_head from "./components/crm/public/crm_head.vue";
import crm_base from "./components/crm/public/crm_base.vue";
import { WOW } from "wowjs"; //配合animate.css 使用
export default {
  data() {
    return {
      transitionName: "fade"
    };
  },
  components: {
    crm_head,
    crm_base
  },
  methods: {
    afterEnter(el) {
      // console.log("动画进入之后");
      el.style.background = "rgb(252, 252, 252)";
    }
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
      console.log("捕获到异常：", { message, source, lineno, colno, error });
    };
    window.addEventListener(
      "error",
      error => {
        console.log("捕获到异常：", error);
      },
      true
    );
  },
  watch: {
    '$route': function(to, from) {
      if (to.path == "/listDetails") {
        //如果跳到登录页，就启用slide-left类名的动画
        this.transitionName = "slide-fade";
      }
    }
  }
};
</script>
<style>
/* 全局设置路由切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active {
  animation: slideInLeft 0.5s reverse;
}
.slide-left-leave-active {
  animation: slideOutLeft 0.5s reverse;
}
.slide-right-enter-active {
  animation: slideInRight 0.5s reverse;
}
.slide-right-leave-active {
  animation: slideOutRight 0.5s reverse;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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
