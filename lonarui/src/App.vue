<template>
  <div id="app">
	  <crm_head></crm_head>
  <crm_base></crm_base>
  <transition :name="transitionName">
   <router-view/>
  </transition>
  </div>    
</template>
<script>
import crm_head from './components/crm/public/crm_head.vue'
import crm_base from './components/crm/public/crm_base.vue'
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
    watch: {
  "$route": function(to,from){
    if(to.path == '/listDetails'){//如果跳到登录页，就启用slide-left类名的动画
      this.transitionName='slide-left';
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
</style>
