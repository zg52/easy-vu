<style scoped lang="less">
@import ".././assets/css/public.less";
.form {
  text-align: center;
  width: 400px;
  margin: 100px auto;
  label {
    width: 400px;
    height: 30px;
    .mb(10);
    border: 1px transparent solid;
    .d-block;
    line-height: 40px;
    span {
      line-height: 40px;
      .fz(16);
      color: #000;
      position: relative;
      top: 3px;
      left: 20px;
    }
  }
  input {
    .ml(20);
    height: 28px;
    .pl(10);
  }
}
button {
  padding: 0 20px;
  height: 35px;
  border: none;
  background: skyblue;
  color: #fff;
  outline: none;
  .ml(70);
  cursor: pointer;
  .mt(10);
  border-radius: 4px;
}
.register {
  margin-top: 20px;
  transition: all 0.4s;
  &:hover {
    color: red;
  }
}
.msgHandler {
  margin-left: 67px;
  span {
    cursor: pointer;
  }
  .mt(20);
  span:first-child {
    .mr(30);
    color: blue;
    text-decoration: underline;
    &:hover {
      color: red;
    }
  }
}
</style>

<template>
  <div>
    <form class="form login" name="login" v-show="loginStatus">
      <label>
        <span>姓名：</span>
        <input type="text" v-model="loginUsername" :placeholder="loginUsernameTIp" />
      </label>
      <label>
        <span>密码：</span>
        <input type="text" v-model="loginPassword" :placeholder="loginPasswordTIp" maxlength="12" />
      </label>
      <button @click.prevent="ringUp" class="login" ref="cons">登录</button>
      <div class="msgHandler">
        <span>忘记密码？点击找回</span>
        <span ref="register" class="register">还没账号？去注册</span>
      </div>
    </form>
    <form class="form register" v-show="registerStatus">
      <label>
        <span>姓名：</span>
        <input type="text" />
      </label>
      <label>
        <span>手机号：</span>
        <input type="text" />
      </label>
      <label>
        <span>密码：&nbsp;&nbsp;&nbsp;</span>
        <input type="text" maxlength="12" />
      </label>
      <label>
        <span>确认密码：</span>
        <input type="text" maxlength="12" />
      </label>
      <button ref="succeesRegister">立即注册</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginStatus: true, //默认展示登录表单
      registerStatus: true,
      loginUsername: "",
      loginUsernameTIp: "",
      loginPassword: "",
      loginPasswordTIp: "",
      // 表单字段验证
      // 登录
      nameReg: /^[\u4E00-\u9FA5]{1,6}$/,
      loginPasswordReg: "",
      loging: "正在登陆中...",

      // 注册
      registerNamePassword: "用户名或密码不对"
    };
  },
  methods: {
    ringUp(e) {
      const _this = this;
      this.nameReg.exec(this.loginUsername) && this.loginPassword != ""
        ? ((_this.$refs.cons.innerHTML = this.loging),
          setMes(this.loginUsername))
        : ((this.loginUsernameTIp = "亲输入您的姓名"),
          (this.loginPasswordTIp = "亲输入您的密码"));

      function setMes(mes) {
        _this.$http
          .get("http://www.zg.com")
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
        window.localStorage.setItem("name", mes);
        setTimeout(() => {
          _this.$router.push({
            name: "index",
            query: {
              path: "/index",
              name: _this.loginUsername
            }
          });
        }, 2000);
      }
    }
  },
  mounted() {
    const _this = this;
    this.$nextTick(() => {
      class regHandler {
        log_on_message() {
          //跳转注册块
          let log_on_target = _this.$refs.register;
          _this.$eventUntil.addEvent(log_on_target,"click", clickRegPath);
          function clickRegPath(e) {
            _this.loginStatus = false;
            e.preventDefault();
          }
        }

        registration() {
          let registration_target = _this.$refs.succeesRegister;
           _this.$eventUntil.addEvent(registration_target,'click',clickSucceesReg);
          function clickSucceesReg(e) {
             e.preventDefault();
             alert(0);
          }
        }
      }
      let regHandler_fun = new regHandler();
      regHandler_fun.log_on_message();
      regHandler_fun.registration();
    });
  },
  beforeDestroy() {
    // 移除该页面的所有dom事件侦听操作，以防页面假死
    class removeEventes {
      removGather (element,Handler) {
    _this.$eventUntil.removeEvent(element,'click',Handler);
      }
    }
    let removeHandler =  new removeEventes();
        removeHandler.removGather(this.$refs.register,clickRegPath);
         removeHandler.removGather(this.$refs.register,clickSucceesReg);
  }
};
</script>
