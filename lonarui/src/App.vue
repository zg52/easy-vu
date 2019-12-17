<template>
 <div id="app" @click="loginStatus">
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
    <!-- 全局对话框(带确认和取消) -->
    <toolTip :tipMsg="propsToMsg.tipMsg" @parentEve="toLogin" v-show="propsToMsg.goLoginStatus"></toolTip>
  </div>
</template>
<script>
import crm_head from "./components/crm/public/crm_head.vue";
import crm_base from "./components/crm/public/crm_base.vue";
import { WOW } from "wowjs"; //配合animate.css 使用
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import toolTip from "./components/crm/public/toolTip.vue";
export default {
  components: {
    crm_head,
    crm_base,
    toolTip //带选择按钮的对话框
  },
  data() {
    return {
      propsToMsg: {
        tipMsg: "登录已过期，请重新登录",
        goLoginStatus: false
      },
      transitionName: "fade",
      tokeVerify: this.$store.state.loginModlue.token,

// 超时退出
      timeoutExit: {
        endTime: new Date().getTime(), //最后一次鼠标操作时间
        startTime: new Date().getTime(), //当前鼠标操作时间
        curTime: 5000
      },
      
    func: {
      ale () {
        alert(0)
      },
      rt () {
        alert(9)
      }
    }
    }
  },
  methods: {
    ...mapMutations(["setToken"]),
    ...mapMutations(["delToken"]),
    afterEnter(el) {
      // console.log("动画进入之后");
      // el.style.background = "rgb(252, 252, 252)";
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

    // 超时自动退出
    loginStatus() {
      //点击，每次改变鼠标最后点击的系统时间
      this.timeoutExit.endTime = new Date().getTime();
      this.propsToMsg.goLoginStatus = false;
    },
 // 超时自动退出弹框提示
    toLogin(msg) {
       this.$router.push({ path: "/" });
       this.$router.go(0) //刷新页面，防止超时退出失效
        },
  },
  mounted() {
    let _this = this;
    new WOW().init(); // 全局调用wow.js

    this.$nextTick(function() {
  // 防止获取不到token
      setInterval(() => { _this.tokeVerify = _this.$store.state.loginModlue.token; }, 0);

// 超时自动退出
      let timesTip = setInterval(() => {
        _this.timeoutExit.startTime = new Date().getTime();
        if ( _this.timeoutExit.startTime - _this.timeoutExit.endTime > _this.timeoutExit.curTime ) {//当前时间 - 鼠标操作某一刻的系统时间
          _this.tokeVerify != ""
            ? (_this.propsToMsg.goLoginStatus = true,
              clearInterval(timesTip),
              _this.delToken()    
              )
            : String;
        }
      }, 1000);
 
    });
  },
  watch: {
  //监听登录路径，若有token，则不显示登录页
    $route: function(to, from) {
      if (to.path === "/") {
        if (
          this.tokeVerify != null &&
          this.tokeVerify != undefined &&
          this.tokeVerify != ""
        ) {
          this.$router.push({ path: "/index" });
        }
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
