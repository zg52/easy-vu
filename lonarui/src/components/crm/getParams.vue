<style scoped>
  .accor {
    margin-top:30px;
  }
  .accor >li {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .accor li span + div {
    overflow: hidden;
    transition:  all .4s;
    height: 0px;
    font-size: 16px;
  }
  .accor li span + div li {
    height: 30px;
     line-height: 30px;
  }
  .accorCur span + .xialaList {
    height: 120px;
  }
</style>
<template>  
  <div>
   <slideImg :imgArry="imgs"></slideImg>
<ul class="accor">
  <li v-for="(xiala,index) of xialas" class="xialaTit" :class="{'accorCur': accorIndex === index}"  @click="xialaHalder(index,$event)">
    <span>{{ xiala.xialaTit }}</span>
    <div class="xialaList">
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
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1411728850,1869975885&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3619839679,1490814984&fm=26&gp=0.jpg"
        },
        {
          src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=207752506,3103804023&fm=26&gp=0.jpg'
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
  },
  methods: {
      xialaHalder (index,e) {
        let xialaList = document.querySelectorAll('.xialaList')
        this.accorIndex = index;
        xialaList[index].classList.contains('.accorCur') ?
       alert(0):
         e.target.style.color = ''
      }
    }
}
</script>