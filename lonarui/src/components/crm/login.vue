<style lang="less" scoped>
@import "../.././assets/css/public.less";
#login {
  width: 100vw;
  height: 100vh;
  background: url("../.././assets/image/login.jpg") top center no-repeat;
}
.form {
  .w(685);
  .t-center;
  background: #fff;
  position: absolute;
  right: 20%;
  div div {
    .t-center;
    .mb(30);
  }
  h4 {
    .t-center;
    color: #138de3;
    .fz(38);
    .pt(100);
  }
  h4 {
    .mb(95);
  }

  label {
    .w(440);
    .h(70);
    border: 1px #eceff0 solid;
    .d-in-block;
    span {
      line-height: 33px;
      .d-in-block;
      .pr(26);
      border-right: 1px #eceff0 solid;
      img {
        vertical-align: middle;
      }
    }
    input {
      .h(70);
      .d-in-block;
      .ml(30);
      .w(280);
      background: transparent;
      border: none;
      .fz(20);
    }
    input::-webkit-input-placeholder {
      color: #c8cace;
    }
   
  }
  label.clo_red {
        border-color:red;
    }
  button {
    .w-h(440, 70);
    background: #ccc;
    .fz(20);
    .t-center;
    outline: none;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  button.skyblue {
      background: skyblue;
  }
  .auth_code {
    input {
      margin-left: 0;
    }
    span {
      border: none;
    }
  }
}
</style>
<template>
  <div id="login">
    <div class="form">
      <form>
        <div>
          <h4>lonarui商城系统管理</h4>
          <div>
            <label for="name" ref="nameId">
              <span>
                <img src="../.././assets/image/login-1.png" alt />
              </span>
              <input
                  type="text"
                  name="name"
                  placeholder="请输入账户名"
                  :model="formLabelAlign.name"
                  @keyup="name = name.replace(/\s+/g, '')"
                  maxlength="6"
              />
            </label>
          </div>
          <div>
            <label for="password" ref="passwordId">
              <span>
                <img src="../.././assets/image/login-2.png" alt />
              </span>
              <input
                type="text"
                name="password"
                placeholder="请输入密码"
                v-model="formLabelAlign.password"
                @keyup="password = password.replace(/\s+/g,'')"
              />
            </label>
          </div>
          <div class="auth_code">
            <label for="authCode" ref="authCodeId">
              <input
                type="text"
                name="authCode"
                placeholder="输入验证码"
                v-model="formLabelAlign.authCode"
                @keyup="authCode = authCode.replace(/\s+/g,'')"
              />
              <span>
                <img src="../.././assets/image/login-3.png" alt />
              </span>
            </label>
          </div>
          <button @click.prevent="loginHandler" ref="login_el">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
    formLabelAlign: {
        name: "", //姓名
        password: "", //密码
        authCode: "", //验证码
    }
    }
  },
  watch: {
      // formLabelAlign: {
      //   handler(val) {
      //     val.name != ''  && val.password != '' && val.authCode != '' ? 
      //     this.$refs.login_el.className = 'skyblue' : 
      //     this.$refs.login_el.className = '';
      //     borderNone(_this.$refs.nameId);
      //     borderNone(_this.$refs.passwordId); 
      //     borderNone(_this.$refs.authCodeId);
      //     function borderNone () {
      //         el.style = 'border-color:#eceff0'
      //     }
      //   },
      //   deep: true
      // }
  },
  methods: {
    loginHandler() {
      let _this = this;
      this.$http.get("http://www.zg.com").then(res => {
          let values = res.login;
          values.map((val, index) => {
            val.name === this.formLabelAlign.name &&
            val.password === this.formLabelAlign.password &&
            val.authCode === this.formLabelAlign.authCode
              ? alert(0)
              : new (function() {
                  verifys(_this.formLabelAlign.name, val.name, _this.$refs.nameId)
                   verifys(_this.formLabelAlign.password, val.password, _this.$refs.passwordId)
                    verifys(_this.formLabelAlign.authCode, val.authCode, _this.$refs.authCodeId)
                 
                  function verifys(modelNpt, dataMsg, el) {
                     dataMsg != modelNpt ?
                     (el.className = 'clo_red') :
                     (el.style = 'border-color:#eceff0')
                  }

                })
          });
        }).catch(res => {
          console.log(res);
        });
    }
  },
  mounted() {}
}
</script>