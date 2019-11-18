<style scoped>
ul {
  position: relative;
  height: 250px;
  width: 250px;
}
li {
  position: absolute;
  width:300px;
  height: 188px;
  overflow: hidden;
}
 
</style>
<template>
  <div>
    <transition-group tag="ul" name="imgs">
      <li class="animated fadeIn"
            v-for="(item, index) in imgArry" :key="index" v-if="num === index">
        <img :src="item.src"/>
      </li>
    </transition-group>
    <span @click="next">下一个</span>
    <span @click="prev">上一个</span>
  </div>
</template>
<script>
export default {
  props: {
    imgArry: {
      type: Array
    }
  },
  data() {
    return {
      num: 0
    };
  },   
  mounted() {
    console.log(this.imgArry )
  },
  methods: {
    next() {
      this.num++;
      this.num > this.imgArry.length - 1 ? this.num = 0 : ''
    },
    prev() {
       this.num--;
      this.num < 0 ? this.num = this.imgArry.length - 1 : ''
    }
  }
};
</script> 