<style scoped="less">
  #form {
    width:500px;
    margin: 100px auto;
  }
  
</style>

<template>
    <div>
        <form id="form">
            <label for=""><input type="text" v-model="username"></label>
            <label for=""><input type="text" v-model="password"></label>
            <button>登录</button>
        </form>
    </div>
</template>
<script>
export default {
    data () {
      return {
          username: '',
          password: ''
      }
    }
}
</script>
