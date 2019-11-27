<style scoped lang="less">
@import "../.././assets/css/public.less";
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
  cursor: not-allowed;
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
    <!-- 登录 -->
    <form class="form login" name="login" v-show="loginStatus">
      <label>
        <span>姓名：</span>
        <input
          type="text"
          v-model="loginUsername"
          :placeholder="loginUsernameTIp"
          @keyup="loginUsername = loginUsername.replace(/\s+/g, '')"
          @click="loginUsernameTIp = ''"
          @mouseleave.prevent="loginUsernameTIp = '请输入您的姓名'"
          maxlength="6"
        />
      </label>
      <label>
        <span>密码：</span>
        <input
          type="password"
          v-model="loginPassword"
          :placeholder="loginPasswordTIp"
          @keyup="loginPassword = loginPassword.replace(/\s+/g, '')"
          @click="loginPasswordTIp = ''"
          @mouseleave.prevent="loginPasswordTIp = '请输入您的密码'"
          maxlength="12"
        />
      </label>
      <button @click.prevent="ringUp" :class="{'login':true,'disable':cursors}" ref="loginTxtTip">登录</button>
      <div class="msgHandler">
        <span @click="loginStatus = false;retrievePassword = true">忘记密码？点击找回</span>
        <span ref="register" class="register">还没账号？去注册</span>
      </div>
    </form>
    <!-- 注册 -->
    <form class="form registerNpt" v-show="registerStatus">
      <label>
        <span>姓名：</span>
        <input type="text" name="registerName" placeholder="请输入您的姓名" v-model="registerName" />
      </label>
      <label>
        <span>手机号：</span>
        <input type="text" name="registerMobile" placeholder="请输入您的手机号" v-model="registerMobile" />
      </label>
      <label>
        <span>密码：&nbsp;&nbsp;&nbsp;</span>
        <input
          type="password"
          name="registerPassword"
          placeholder="请输入密码"
          v-model="registerPassword"
          maxlength="12"
        />
      </label>
      <label>
        <span>确认密码：</span>
        <input
          type="password"
          name="verifyRegisterPassword"
          placeholder="请再次输入密码"
          v-model="verifyRegisterPassword"
          maxlength="12"
        />
      </label>
      <button ref="succeesRegister">立即注册</button>
    </form>
    <!-- 找回密码 -->
    <form class="form retrievePassword" v-show="retrievePassword">
      <label>
        <span>姓名：</span> 
        <input type="text" name="retrieveName" placeholder="请输入您的姓名" v-model="retrieveName" />
      </label>
      <label>
        <span>手机号：</span>
        <input type="text" name="retrieveMobile" placeholder="请输入您的手机号" v-model="retrieveMobile" />
      </label>
      <label>
        <span>输入新密码：</span>
        <input
          type="password"
          name="newPassword"
          placeholder="请输入新密码"
          v-model="newPassword"   
          maxlength="12"
        />
      </label>
      <button type="button" ref="succeesSubmit">点击提交</button>
    </form>
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginStatus: true, //默认展示登录表单
      registerStatus: false, //默认展示注册表单
      retrievePassword: false, //找回密码
 // 表单字段验证

      nameReg: /^[\u4E00-\u9FA5]{1,6}$/g, //登录名/注册名验证
      mobileReg: /^1[34578]\d{9}$/g, //手机号验证
      passwordReg: /^[0-9]*$/, //密码验证

  // 登录
      loginUsername: "", //登录名  
      loginUsernameTIp: "请输入您的姓名", //登录名提示
      loginPassword: "", //登录密码
      loginPasswordTIp: "请输入您的密码", //登录密码提示
      loging: "正在登陆中...",
      cursors: false, // 按钮是否可点击

  // 注册
      registerName: "",
      registerMobile: "",
      registerPassword: "",
      verifyRegisterPassword: "",

  // 注册各项提示
      registerNptTip: [
        "请输入您的姓名",
        "请输入您的手机号",
        "请输入密码",
        "请再次输入密码"
      ],

  // 找回密码
    newPassword: '',//新密码\
    retrieveName: '',//名字
    retrieveMobile: '',//手机号


      informationTip(nameMsg, nameType) {
        //启用elementUi 信息提示功能
        this.$message({
          message: nameMsg,
          type: nameType
        });
      }
    };
  },
  methods: {
    // 登录
    ringUp() {
      const _this = this;
      !_this.nameReg.test(_this.loginUsername)
        ? _this.informationTip("请输入正确的姓名", "warning")
        : setMes();

      function setMes() {
        _this.$http
          .get("http://www.zg.com")
          .then(res => {
            console.log(res);
            let idMsg = {
              //输出数据库用户登录信息
              idName() {
                return res.login.map((val, index) => {
                  return val.name;
                });
              },
              idPassword() {
                return res.login.map((val, index) => {
                  return val.password;
                });
              },
              ids() {
                return res.login.map((val, index) => {
                  return val.id;
                });
              }
            };
            !idMsg.idName().includes(_this.loginUsername)
              ? _this.informationTip("该用户不存在，请先注册", "warning")
              : !idMsg.idPassword().includes(_this.loginPassword)
              ? _this.informationTip("请输入正确密码", "warning")
              : loginSuccees();
          })
          .catch(err => {
            console.log(err);
          });
      }
      function loginSuccees() {
        window.localStorage.setItem("name", _this.loginUsername);
        let loginBtnTxt = _this.$refs.loginTxtTip;
        loginBtnTxt.innerHTML = _this.loging;
        loginBtnTxt.innerHTML === _this.loging
          ? (_this.cursors = true) //登录成功，禁用登录按钮点击
          : (_this.cursors = false);
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
    },
    open2() {}
  },
  mounted() {
    const _this = this;
    this.$nextTick(() => {
      class regHandler {
        log_on_message() {
          //展示注册表单
          let log_on_target = _this.$refs.register;
          _this.$eventUntil.addEvent(log_on_target, "click", clickRegPath);
          function clickRegPath(e) {
            (_this.loginStatus = false), (_this.registerStatus = true);
            e.preventDefault();
          }
        }
        // 验证及表单注册
        registration() {
          let registration_target = _this.$refs.succeesRegister;
          let registerNpt = document
            .querySelector(".registerNpt")
            .getElementsByTagName("input");

          //  控制表单输入及提示信息
          Array.from(registerNpt).map((val, index) => {
            nptTip("keyup", nptAcg); // 键入表单去空格
            nptTip("click", nptRmoveTip); // 键入表单去除提示
            nptTip("mouseleave", addNptTip); // 键入表单去除提示
            function nptTip(eType) {
              _this.$eventUntil.addEvent(val, eType, nptAcg);
            }
            function nptAcg() {
              this.value = this.value.replace(/\s+/g, "");
            }
            function nptRmoveTip() {
              this.placeholder = "";
            }
            function addNptTip() {
              this.placeholder = _this.registerNptTip[index];
            }
          });
  // 点击注册按钮验证

          var registerHandler = {
            clickSucceesReg(e) {
              //  首先判断用户是否已存在数据库中
              function userStore() {
                _this.$http
                  .get("http://www.zg.com")
                  .then(res => {
                    res.login.find((val, index) => {
                      _this.registerMobile === val.mobile
                        ? (console.log(val.mobile),
                          _this.informationTip(
                            "该用户已注册，请直接登录！",
                            "warning"
                          ),
                          (_this.loginStatus = true),
                          (_this.registerStatus = false))
                        : String;
                    });
                    return;
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }
              startReg();

              function startReg() {
                !_this.registerName.match(_this.nameReg)
                  ? _this.informationTip("请输入正确的姓名", "warning")
                  : !_this.registerMobile.match(_this.mobileReg)
                  ? _this.informationTip("请输入正确的手机号", "warning")
                  : userStore();
                !_this.registerPassword.match(_this.passwordReg) &&
                _this.registerPassword.length > 4
                  ? (_this.informationTip(
                      "请输入12位数以内的数字密码",
                      "warning"
                    ),
                    (_this.verifyRegisterPassword = ""))
                  : _this.registerPassword !== _this.verifyRegisterPassword
                  ? (_this.informationTip(
                      "两次输入的密码不一致，请重新输入！",
                      "warning"
                    ),
                    (_this.verifyRegisterPassword = ""))
                  : (window.localStorage.setItem(
                      "mobile",
                      _this.registerMobile
                    ),
                    _this.informationTip("注册成功！请登录！", "success"), //弹出注册成功时，展示登录表单，隐藏注册表单
                    setTimeout(() => {
                      (_this.loginStatus = true),
                        (_this.registerStatus = false);
                    }, 2000));
              }
              e.preventDefault();
            } 
          };
          _this.$eventUntil.addEvent(
            registration_target,
            "click",
            registerHandler.clickSucceesReg
          );
        }
        // 找回密码
        retrieve_password() {
          _this.$eventUntil.addEvent(_this.$refs.succeesSubmit,'click',submitHandler);
            function submitHandler () {
               !_this.retrieveName.match(_this.nameReg) ? 
               _this.informationTip("请输入正确的姓名", "warning") :
              !_this.retrieveMobile.match(_this.mobileReg) ?
               _this.informationTip("请输入正确的手机号", "warning") :
                   !_this.newPassword.match(_this.passwordReg) &&
                _this.newPassword.length > 4 ?
                _this.informationTip( "请输入12位数以内的数字密码", "warning" ): toSubmit();
                function toSubmit() {
                    _this.informationTip( "密码找回成功，请登录！", "warning" );
                    _this.loginStatus = true;
                    _this.retrievePassword = false
                }
            }
        }
      }
      //
      let regHandler_fun = new regHandler();
      regHandler_fun.log_on_message(); //展示注册表单
      regHandler_fun.registration(); //注册验证
      regHandler_fun.retrieve_password(); //找回密码
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
};
</script>

 