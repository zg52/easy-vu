<style scoped lang="less">
@import "../.././assets/css/public.less";
li {
  .fz(20);
  color: purple;
  span {
    display: block;
  }
}
</style>   
<template>
<div class="poetry">
   <li id="lop"><span 
    v-for="(list,index) of lists"
    :key="list.id">{{list.name}}</span>
    </li>
    <p @mouseenter.prevent="ops">{{mes}}eee</p>
    <p>{{$route.params.names}}link to 传参</p>
</div>
</template> 

<script>
import store from '@/./assets/js/store';
export default {
  components:{
  },
props:{
  mes:{
    type:String
  }
},
 data () {
  return {
    lists:[
      {name:'秋云边上的彩虹雨'},
      {name:'总是让人猝不及防'}
    ]
  }
},
methods :{
  ops () {
   this.$emit('oop',lop.innerText)
  }
},
}

</script>


