<template>
    <div>
        <form action="">
            <label for=""><input type="text" v-model="username"></label>
            <label for=""><input type="text" v-model="password"></label>
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
