<style scoped lang="less">
@import ".././assets/css/public.less";
.active {color: red;}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
<template>
  <div class="poetry">
       <router-link to="/lonarui2" >go to lonarui2</router-link>this is lonarui
         <router-link to="/lonarui3">go to lonarui3</router-link><br>
<router-link :to="{name:'lonarui4',path:'/lonarui4',params:{name1:lists[0].cont}}">通过router-link:to向lonarui4传参</router-link>
<div @click="toLonarui4()">通过点击跳转设置$router.push向lonarui4用query传参</div>
 <router-link to="/lonarui4/198/新闻资讯">通过路由配置向lonarui4传参</router-link> 
<router-link to="/store">去store</router-link>
    <div>{{mes}}</div>
    <!-- tab -->
    <ul>
      <li
        v-for="(list,index) of lists"
        :key="list.id"
        :class="{active:num == index}"
        @click="num = index"
      >{{list.as}}</li>
    </ul>
    <ul>
      <li
        v-for="(list,index) of lists"
        :key="list.id"
        v-show="num == index"
      >{{list.cont}}</li>
    </ul>
 <lonarui2 :mes="lists[0].cont" @oop="opsp"></lonarui2>
 <transition name="fade" class="fade-enter-active"> 
 <router-view></router-view>
 
 </transition>
 <p id="io"></p>

 <router-link to="/lll">  
   404得到
 </router-link>

  </div>
</template>

<script>
import lonarui2 from './lonarui2.vue';
export default {
  components:{
    lonarui2
  },
  data (){
    return {
      mes:'111',
      num:0,
      lists:[
        {as:'first',cont:'传参'},
        {as:'two',cont:'2'},
        {as:'three',cont:'3'}
      ]
    }
  },
  methods:{
    opsp (ms) {
     io.innerHTML = ms;
    }
  },
  methods: {
     toLonarui4 () {
     this.$router.push({
       name:'lonarui4',
       path:'/lonarui4',
       query:{
         page:'1',
         code:'00'
       }
      
     })
   }
  },
  mounted() {
  },

}

</script>


