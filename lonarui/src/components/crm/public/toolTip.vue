<template>
  <div>
    <div class="toolTip" v-show="toolTipStatus">
      <div class="msgs">
        <p class="flexbetween"><span>系统提示</span><i class="el-icon-close" @click="toolTipStatus = false"></i></p>
        <span> <i class="el-icon-warning"></i> {{ tipMsg }}</span>
        <div class="t-right pt20">
          <button @click.prevent="toolTipStatus = false">取消</button>
          <button @click.prevent="toParentEve">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
      tipMsg: {
        type: String
      }
    },
  data() {
   return {
      toolTipStatus: true,
   }
  },
  methods:{
    toParentEve () {
      this.$emit('parentEve','sssss')
    }
  },
   mounted(){
     let _this = this;
     this.$nextTick(function () {
     })
   }
};
</script>
<style lang="less" scoped>
@import "../../.././assets/css/public.less";
.toolTip {
  .w100;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin-left: 10px;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 8px 14px;
    font-size: 14px;
    border-radius: 4px;
  }
  p {
    i {.trans4;}
    i:hover {
      color: #3a8ee6;
      cursor: pointer;
       transform: rotate(90deg);
    }
  }
  button:nth-child(2) {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  button:first-child:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  button:first-child:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
}

button:nth-child(2):focus,
button:nth-child(2):hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

button:nth-child(2):active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
.msgs {
  p {
    font-size: 18px;
    line-height: 1;
    color: #303133;
  }
  p + span {
    font-size: 14px;
    .mt(20);
    .d-block;
    i {
      color: rgb(238, 181, 24);
      .fz(22);
      vertical-align: middle;
    }
  }
  .w(280);
  padding: 14px;
  background: #fff;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
}
</style>