<style scoped lang="less">
  @import '.././assets/css/public.less';
  #form {
    text-align: center;
    width:400px;
    margin: 100px auto;
    label {
      width: 400px;
      height: 30px;
      .mb(10);
      border:1px transparent solid;
      .d-block;
      line-height: 40px;
      span {line-height: 40px;.fz(16);color: #000;
      position: relative;
      top:3px;
      left:20px;

      }
    }
    input {
     .ml(20);
      height: 28px;
      .pl(10);

    }
  }
  .login {
   padding:0 20px;
    height: 35px;
    border:none;
    background: red;
    color: #fff;
    outline: none;
    .ml(70);
    cursor: pointer;
    .mt(10);
    border-radius: 4px;
  }
</style>

<template>
  <div>
    <form id="form">
      <label for=""><span>姓名：</span><input type="text" v-model="username" :placeholder="usernameTIp"></label>
      <label for=""><span>密码：</span><input type="text" v-model="password" :placeholder="passwordTIp" maxlength="12"></label>
      <button @click.prevent="ringUp" class="login" ref="cons">登录</button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '',
        usernameTIp: '',
        password: '',
        passwordTIp: '',
        nameReg: /^[\u4E00-\u9FA5]{1,6}$/,
        passwordReg: '',
        loging: '正在登陆中...'
      }
    },
    methods: {
      ringUp(e) {
        const _this = this;
        this.nameReg.exec(this.username) && this.password != '' ?
        (_this.$refs.cons.innerHTML = this.loging,setMes(this.username)) :
        (this.usernameTIp = "亲输入您的姓名",this.passwordTIp = "亲输入您的密码");
        function setMes (mes) {
          window.localStorage.setItem('name',mes);
          setTimeout( ()=> {
            _this.$router.push({
              name:'index',
             query: {
                path: '/index',
                name: _this.username
             }
            })
          },2000)
        }
      }
    },
    mounted () {
     const _this = this;
     this.$nextTick(() => {
      console.log(_this.$data.loging)
     })
    }
  }
</script>
