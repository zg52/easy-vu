<template>
  <div>
    <p v-for="(list,index) of lsists" :key="list.id">{{list.item}}</p>

    <div>{{$route.params.name1}}</div>
    <div>{{page}} + {{code}}</div>
    <div>{{$route.params.lisId}}{{$route.params.listTit}}</div>
  </div>
</template>
<script>
import store from '@/./assets/js/store';
export default {
  name: "lonarui4",
  data() {
    return {
      lsists: [{ item: "生活如此多娇！" }],
      page: "",
      code: ""
    };
  },
  mounted() {
    this.getParmas();
    console.log(this.$route.parmas);
  },
  methods: {
    getParmas() {
      this.page = this.$route.query.page;
      this.code = this.$route.query.code;
      console.log("page", this.page);
      console.log("code", this.code);
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
};
</script>