<template>
    <div>
     <p>{{num}}</p>
    <p>getters {{num4}}</p>
     <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
     <button @click="chag"> <p>{{change_cont}}</p></button>

       <p>通过computed得到state值：{{mes}}</p>
     <p>通过mapsate得到state值：{{mes1}}</p>  
     <p>通过mapsate以数组方式得到state值{{num2}}</p>
    </div>
</template>

<script>
import store from '@/./assets/js/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    store,
    data() {
        return {
            change_cont:this.$store.state.str //state访问状态对象
        }
    },
    computed:{
      mes(){
         return this.$store.state.num  
        },
        ...mapState(['num']),
        ...mapState(['num4']),
        ...mapGetters(['num4']),
        ...mapState(["num2"]),
        ...mapState({
           mes1:sate => sate.num3
       }), 

    },
     methods:{
         chag () {
         this.change_cont = this.$store.state.str.replace('hh','是么')
        },
         ...mapMutations(['add','reduce']),
          ...mapActions(['addAction','reduceAction'])//异步调用
     }
}  
</script>