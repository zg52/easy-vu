<template>
  <div id="app">
	  <crm_head></crm_head>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view/>
  <crm_base></crm_base>

  </div>    
</template>
<script>
// export default {
//   watch : {
//   $route (to,from){
//     if (to.path == '/lonarui2') {
//       this.$router.push('/lonarui2');
//     }
//   }
// }
// }
import crm_head from './components/crm/public/crm_head.vue'
import crm_base from './components/crm/public/crm_base.vue'
export default {
	components:{
		crm_head,
		crm_base
	}
}
</script>
