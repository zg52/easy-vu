<style scoped lang="less">
@import '.././assets/css/public.less';
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
    <p @mouseenter.prevent="ops">{{mes}}</p>
    <p>{{$router.name}}</p>
</div>
</template> 

<script>
export default {
  components:{
  },
props:{
  mes:{
    type:Array
  }
},
 data () {
  return {
    lists:[
      {name:'这是lonarui3'},
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


