<template>
  <div>
  <input type="text">
  </div>
</template>

<script>
export default {
    props: {
    level: {
      type: Number,
      required: true
    }
  },
  render (ce) {
    return ce(
      "div", // 标签名称
      this.$slots.default // 子节点数组
    );
  }
} 
</script>
