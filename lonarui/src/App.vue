<template>
  <div id="app">
    <!-- <crm_head></crm_head>
    <crm_base></crm_base>-->
    <!-- 不需要刷新的路由配置里面配置 -->
    <transition
      :name="transitionName"
      @after-enter="afterEnter"
      appear
      :duration="{ enter: 500, leave: 600 }"
      mode="out-in"
    >
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition
      :name="transitionName"
      @after-enter="afterEnter"
      appear
      :duration="{ enter: 500, leave: 600 }"
      mode="out-in"
    >
      <!-- 需要刷新的路由配置里面配置 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
import crm_head from "./components/crm/public/crm_head.vue";
import crm_base from "./components/crm/public/crm_base.vue";
import { WOW } from "wowjs"; //配合animate.css 使用
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      transitionName: "fade",
      tokeVerify: this.$store.state.loginModlue.token
    };
  },
  components: {
    crm_head,
    crm_base
  },
  methods: {
    ...mapMutations(['setToken']),
    ...mapMutations(['delToken']),
    afterEnter(el) {
      // console.log("动画进入之后");
      // el.style.background = "rgb(252, 252, 252)";
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
    let _this = this;
    this.$nextTick(function() {
      // 判断登录状态
      //  console.log(this.tokeVerify);
      if (
        this.tokeVerify !== null &&
        this.tokeVerify !== undefined &&
        this.tokeVerify !== ""
      ) {
        this.$route.path === "/" ? this.$router.push("/index") : String;

// 超时自动退出
      //   setTimeout(() => {
      //     _this.delToken();
      //   },5000);
      // }

var timerIdle=0;   //空闲时间
var timerBusy=0;   //倒计时开始
var timerIdle1=5;  //系统参数定义超时时间
var timerBusy1=14; //退出时间


function timerTimeout(){
    timerIdle++;
    if (timerIdle>timerIdle1){
      if (timerBusy==0){
            timerBusy=timerBusy1+1;
      //view timerUI
      document.getElementById("timerUI").style.display="inline";   
    }
    timerBusy--;
    //view timerBusy
    document.getElementById("_timerBusy").innerHTML=timerBusy;
    if (timerBusy<=0){
        timerExit();
        return;
    }
   }else{
      timerBusy=0;
   }
   window.setTimeout("timerTimeout()",1000);
}

  function timerUser(){
    //让div消失
    timerIdle=0;
    document.getElementById("timerUI").style.display="none";
  }

  function timerExit()
  {
    //超时处理.这里可以写自己需要执行的方法...
    document.getElementById("_timerBusy").innerHTML="Timeout";
  }
  window.setTimeout("timerTimeout()",1000);
  function mouseMove(ev){
    ev= ev || window.event;
    timerUser();
    var mousePos = mouseCoords(ev);
  }


function mouseCoords(ev){
  if(ev.pageX || ev.pageY){
    return {x:ev.pageX, y:ev.pageY};
  }
  return {
      x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
      y:ev.clientY + document.body.scrollTop - document.body.clientTop
  };
}

  document.onmousemove = mouseMove;
  document.onkeydown = mouseMove;


// -------------------------------------------------------------------------------------------------------
      // console.log(this.$route);
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
    });
  },
  watch: {
    $route: function(to, from) {
      // if (to.path == "/listDetails") {
      //   //如果跳到登录页，就启用slide-left类名的动画
      //   this.transitionName = "slide-fade";
      // }
      // if(to.path == '/') {
      //   console.log(909090);
      //     console.log(to.name);
      //   window.localStorage.getItem('token') !== null ?
      //   this.$router.push('/index') : String;
      // } else {
      //   console.log(to.path)
      // }
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
