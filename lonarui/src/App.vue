<template>
  <div id="app">
	  <head_first></head_first>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view/>
  <foot></foot>

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
import head_first from './components/public/head_first.vue'
import foot from './components/public/foot.vue'
export default {
	components:{
		head_first,
		foot
	}
}
</script>
