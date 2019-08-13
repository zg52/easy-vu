<template>
  <div id="app">
    <router-view/>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
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
</script>
