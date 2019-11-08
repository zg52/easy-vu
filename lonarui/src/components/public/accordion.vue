<style scoped>
  .accor {
    margin-top:30px;
  }
  .accor >li {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .accor li span + div {
    height: 0;
    overflow: hidden;
    transition:  all .4s;
  }
  .accor li.accorCur span + div{
    height: 80px;
  }
</style>
<template>
  <div>
   <slideImg :imgArry="imgs"></slideImg>
<ul class="accor">
  <li v-for="(xiala,index) of xialas" :class="{'accorCur': accorIndex === index}"  @click="accorIndex = index">
    <span>{{ xiala.xialaTit }}</span>
    <div>
      <li v-for="(xialaCont,index) of xiala.xialaConts">{{ xialaCont.txt }}</li>
    </div>
  </li>
</ul>
  </div>
</template>
<script>
import slideImg from './public/slideImg';
export default {
  components: {
    slideImg
  },
  data () {
    return {
      accorIndex: 0,
      imgs:[
      {
          src:
            "http://img.alicdn.com/bao/uploaded/i2/2273954737/TB2AZhSqFXXXXb.XXXXXXXXXXXX_!!2273954737.jpg_240x5000Q50s50.jpg_.webp"
        },
        {
          src:
            "http://img.alicdn.com/bao/uploaded/i3/11179030210909738/T1r500FbXcXXXXXXXX_!!0-item_pic.jpg_240x5000Q50s50.jpg_.webp"
        },
        {
          src:'http://img.alicdn.com/bao/uploaded/i3/1058751499/TB2mhyYXVHFK1JjSZFzXXb23XXa_!!1058751499.jpg_240x5000Q50s50.jpg_.webp'
        }
    ],
    xialas: [
      {
        xialaTit:'第一项',
        xialaConts: [
          { txt: '内容1111' },
          { txt: '内容2222' },
          { txt: '内容1111' },
          { txt: '内容2222' }
        ]
      },{
        xialaTit:'第二项',
        xialaConts: [
          { txt: '内容1111' },
          { txt: '内容2222' },
          { txt: '内容1111' },
          { txt: '内容2222' }
        ]
      },{
        xialaTit:'第三项',
        xialaConts: [
          { txt: '内容1111' },
          { txt: '内容2222' },
          { txt: '内容1111' },
          { txt: '内容2222' }
        ]
      },
    ]
    }
  }
}
</script>