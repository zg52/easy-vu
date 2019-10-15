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
button.disable {
  cursor:not-allowed;
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
        <input type="text"
                v-model="loginUsername" 
                :placeholder="loginUsernameTIp" 
                @keyup="loginUsername = loginUsername.replace(/\s+/g, '')"
                 @click="loginUsernameTIp = ''"
                 @mouseleave.prevent = "loginUsernameTIp = '请输入您的姓名'"
                  maxlength="6" />
      </label>
      <label>
        <span>密码：</span>
        <input type="password" 
               v-model="loginPassword"
               :placeholder="loginPasswordTIp" 
                @keyup="loginPassword = loginPassword.replace(/\s+/g, '')"
                @click="loginPasswordTIp = ''"
                @mouseleave.prevent = "loginPasswordTIp = '请输入您的密码'"
                 maxlength="12" />
      </label>
      <button
       @click.prevent="ringUp" 
       :class="{'login':true,'disable':cursors}" 
       ref="loginTxtTip">登录</button>
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
<!-- 弹出信息提示 -->
<div>
    <!-- <el-button >成功</el-button> -->
 
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginStatus: true, //默认展示登录表单
      registerStatus: true,//默认展示注册表单
      // 表单字段验证
      // 登录
      loginUsername: "",//登录名
      loginUsernameTIp: "请输入您的姓名",//登录名提示
      loginPassword: "",//登录密码
      loginPasswordTIp: "请输入您的密码",//登录密码提示
      clickLoginTip:'用户名或密码错误',
      nameReg: /^[\u4E00-\u9FA5]{1,6}$/,//登录名/注册名验证
      loging: "正在登陆中...",
      cursors:false,// 按钮是否可点击

      // 注册
      registerNamePassword: "用户名或密码不对"
    };
  },
  methods: {
    ringUp(e) {
      const _this = this;
      !_this.nameReg.test(_this.loginUsername) ? 
      informationTip('请输入正确的姓名','warning') : 
      setMes();
      function setMes() {

        _this.$http.get("http://www.zg.com").then(res => {
          let idMsg = {  //输出数据库用户登录信息
            idName() {
              return res.login.map((val,index) => {
              return val.name
            })
            },
            idPassword() {
              return res.login.map((val,index) => {
              return val.password
            })
            },
            ids() {
              return res.login.map((val,index) => {
              return val.id
            })
            },
          }
             !(idMsg.idName()).includes(_this.loginUsername) ? 
            informationTip('该用户不存在，请先注册','warning') : 
           !(idMsg.idPassword()).includes(_this.loginPassword) ? 
            informationTip('请输入正确密码','warning') : loginSuccees()
          }).catch(err => {
            console.log(err);
          })
      }
        function informationTip (nameMsg,nameType) {//启用elementUi 信息提示功能
          _this.$message({
          message: nameMsg,
          type: nameType
        })
       }
        function loginSuccees () {
        window.localStorage.setItem("name", _this.loginUsername);
        
        let loginBtnTxt = _this.$refs.loginTxtTip;  
            loginBtnTxt.innerHTML = _this.loging;
            loginBtnTxt.innerHTML === _this.loging ? 
            _this.cursors = true :   //登录成功，禁用登录按钮点击
            _this.cursors = false;
          setTimeout(() => {
          _this.$router.push({
            name: "index",
            query: {
              path: "/index",
              name: _this.loginUsername
            }
          });
        }, 2000)
        }
    },
     open2() { 
     }
  },
  mounted() {
    const _this = this;
    this.$nextTick(() => {
      class regHandler {
        log_on_message() {
          //跳转注册块
          let log_on_target = _this.$refs.register;
          _this.$eventUntil.addEvent(log_on_target, "click", clickRegPath);
          function clickRegPath(e) {
            _this.loginStatus = false;
            e.preventDefault();
          }
        }
        registration() {
          let registration_target = _this.$refs.succeesRegister;
          _this.$eventUntil.addEvent(
            registration_target,
            "click",
            clickSucceesReg
          );
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
      removGather(element, Handler) {
        _this.$eventUntil.removeEvent(element, "click", Handler);
      }
    }
    let removeHandler = new removeEventes();
    // removeHandler.removGather(this.$refs.register, clickRegPath);
    // removeHandler.removGather(this.$refs.register, clickSucceesReg);
  }
}
</script>
