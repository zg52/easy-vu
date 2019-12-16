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
 <el-button type="text" @click="open">点击打开 Message Box</el-button>
    
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
      tokeVerify: this.$store.state.loginModlue.token, //从store中得到token
// 超时退出
      timeoutExit: {
        endTime: new Date().getTime(),//最后一次鼠标操作时间
        startTime: new Date().getTime(),//当前鼠标操作时间
        curTime:  1 
      }
    } 
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
    loginStatus () {//点击，每次改变鼠标最后点击的系统时间
     this.timeoutExit.endTime = new Date().getTime();
    },
// 超时自动退出弹框提示
     open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
  },
  mounted() { 
let _this = this;
// 全局调用wow.js
new WOW().init();
    this.$nextTick(function() {
// 判断登录状态
      if (
        this.tokeVerify !== null &&
        this.tokeVerify !== undefined &&
        this.tokeVerify !== ""
      ) this.$route.path === "/" ? this.$router.push("/index") : String;

// 超时自动退出
 let timesTip = setInterval(() => {
       _this.timeoutExit.startTime = new Date().getTime();
       if(_this.timeoutExit.startTime - _this.timeoutExit.endTime  > _this.timeoutExit.curTime) { //当前时间 - 鼠标操作某一刻的系统时间
         this.$store.state.loginModlue.token != '' ? (
           _this.$message({ message: '为保证您的信息安全，登录已超时，请重新登录！', type: 'warning' }),
            clearInterval(timesTip), 
           _this.delToken()
         ) : String;
       } 
     },1000);
// -------------------------------------------------------------------------------------------------------
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
    } } }
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
