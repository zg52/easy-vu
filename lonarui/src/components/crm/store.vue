<template>
  <div>
    <p>{{num}}</p>
    <p>getters {{num4}}</p>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button> 
    <button @click="chag">  
      <p>{{change_cont}}</p>
    </button>

    <p>通过computed得到state值：{{mes}}</p>
    <p>通过mapsate得到state值：{{mes1}}</p>
    <p>通过mapsate以数组方式得到state值{{num2s}}</p>
    module2:
    <p @click="add1Actions">{{$store.state.second.number1}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
export default {
  data() {
    return {
      change_cont: this.$store.state.first.str //state访问状态对象
    };
  },
  computed: {
    mes() {
      return this.$store.state.first.num;
    },
    num2s() {
      return this.$store.state.first.num2;
    },
    ...mapState(
        {
             "num":"first.num"
        }
    ),
    ...mapState(["num4"]),
    ...mapGetters(["num4"]),
    ...mapState(["num2"]),
    ...mapState({
      mes1: sate => sate.first.num3,
       num: sate => sate.first.num
    })
  },
  methods: {
    chag() {
      this.change_cont = this.$store.state.str.replace("hh", "是么");
    },
    ...mapMutations(['add1']),
    ...mapActions(['add1Actions']),
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"]), //异步调用
    ...mapMutations(['setToken'])
  },
  mounted() {
console.log(this.setToken())
  },
};
</script>