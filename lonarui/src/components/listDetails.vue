<style scoped lang="less">
@import ".././assets/css/public.less";
.codeTit {
  color: #263162;
  font-size: 20px;
  font-weight: bold;
}
.listDetails li {
  line-height: 30px;
  font-size: 14px;
  border-bottom: 1px #333333 solid;
 transition: all .4s;
}
.listDetails li:hover {
 background: skyblue;
 color: #fff;
}

.listDetails ul {
  .mt(20);
}
</style>
<template>
  <div class="listDetails mt30">
    <div class="mt1100">
      <h2 class="codeTit">代码详情页</h2>
      <div>
        <ul>
          <li 
          v-for="(code,index) of codes"
          :key="code.id"
          >{{ code.text }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listDetails",
  data() {
    return {
      codes: [
        {
          text: "document.getElementBytIdcodecodecodecodecode"
        },
        {
          text: "document.getElementBytIdcodecodecodecodecode"
        },
        {
          text: "document.getElementBytIdcodecodecodecodecode"
        }
      ]
    };
  }
};
</script>

