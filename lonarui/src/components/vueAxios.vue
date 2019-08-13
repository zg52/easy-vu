<template>
  <div>
    axios:
    <ul>
      <li v-for="(list,index) of lists" :key="list.id">
        <span>{{list.id}}</span>
        <i>{{list.name}}</i>
        <em>{{list.des}}</em>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [],
      getAxios() {
        this.$ajax
          .get("http://www.wujiaweb.com/api")
          .then(res => {
            let resResult = res.data.data;
            console.log(resResult);
            let _this = this;
            resResult.favourite_goods.forEach(function(val, index) {
              _this.lists.push({
                id: val.goods_id,
                name: val.goods_name,
                des: val.goods_remark
              });
            });
          })
          .catch(res => {
            console.log(res);
          });
      }
    };
  },
  mounted() {
     this.$nextTick(() => {
         this.getAxios();
     })
  }
};
</script>