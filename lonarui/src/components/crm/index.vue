<style lang="less" scoped>
.active {
  color: red;
}
</style>
<template>
  <div>
    <input type="text" v-model="obj.a">
    <p>{{ obj.a }}</p>
    <router-link to="./listDetails">用户列表</router-link>
 <!-- <div id="myChart" :style="{width: '300px', height: '300px'}"></div> -->
<keep-alive include="op">
   <op :level="1">this is render
  <div></div>
  </op>
</keep-alive>
  </div>
</template>
<script>
 import op from './op.vue'
export default {
  components:{
    op
  },
  data() {
    return {
      obj:{
        a:'2'
      },
      transitionName: "fade",
    };
  },
  methods: {
// echarts
// drawLine() {
// 基于准备好的dom，初始化echarts实例
//       let myChart = this.$echarts.init(document.getElementById("myChart"));
//       // 绘制图表
// myChart.setOption({
//     series : [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius: '55%',
//             data:[
//                 {value:235, name:'视频广告'},
//                 {value:274, name:'联盟广告'},
//                 {value:310, name:'邮件营销'},
//                 {value:335, name:'直接访问'},
//                 {value:400, name:'搜索引擎'}
//             ]
//         }
//     ]
// })
    // }
  },
  watch: {
'obj.a': {
  handler (val) {
   val == '2' ? console.log(0) : ''
  },
  // immediate: true,
}
  },
  mounted() {
  //  this.obj = {
    // a: '456'
  // }
    // this.drawLine();//调用echarts
  },
//  beforeRouteEnter (to, from, next) {
//          to.meta.keepAlive = false;
//          next();
//       },
}
</script>
 