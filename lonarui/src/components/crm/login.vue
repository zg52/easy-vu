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
    border-color: red;
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
.redTip input {
  color: red;
}
</style>
<template>
  <div id="login">
    <div class="form" ref="form">
      <form>
        <div>
          <h4>lonarui商城系统管理</h4>
          <div>
            <label for="name" ref="nameId">
              <span>
                <img src="../.././assets/image/login-1.png"/>
              </span>
              <input
                type="text"
                name="name"
                :placeholder="tips.nameTip"
                v-model="form.name"
                maxlength="6"
              />
            </label>
          </div>
          <div>
            <label for="password" ref="passwordId">
              <span>
                <img src="../.././assets/image/login-2.png"/>
              </span>
              <input
                type="text"
                name="password"
                :placeholder="tips.passTip"
                v-model="form.password"
              />
            </label>
          </div>
          <div class="auth_code">
            <label for="authCode" ref="authCodeId">
              <input
                type="text"
                name="authCode"
                :placeholder="tips.authCodeTip"
                v-model="form.authCode"
              />
              <span>
                <img src="../.././assets/image/login-3.png"/>
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
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
export default {
  name:'login',
  data() {
    return {
// 绑定的表单提示语
      tips: {
        nameTip: "请输入账户名",
        passTip: "请输入密码",
        authCodeTip: "请输入验证码"
        },
// 绑定的表单数据
      form: {
        name: "", //姓名
        password: "", //密码
        authCode: "" //验证码
        }
    };
  },
  watch: {
    form: {
      handler() {}
    }
  },
  methods: {
    ...mapMutations(['setToken']),
 
// 登录判断
    loginHandler() {
      // console.log( this.setToken());
      let _this = this;
      let nptDates = this.form;
          nptDates.name != "" &&
          nptDates.password != "" &&
          nptDates.authCode != "" ?
          loginReg()  :
        new (function() {
            nptB(nptDates.name, _this.$refs.nameId);
            nptB(nptDates.password, _this.$refs.passwordId);
            nptB(nptDates.authCode, _this.$refs.authCodeId);
            function nptB(x, y) {
             x === "" ? y.style = "border-color:red" : 'y.style = "border-color:#eceff0"'
            }
          });
        function loginReg () {
//  发送数据，携带token,根据接口获取token
              _this.$http.post(
               'http://www.zg.com',
               {
                 name: nptDates.name,
                 password: nptDates.password,
                 authCode: nptDates.authCode
               }).then(res => {
// 判断验证码是否正确
                     nptDates.authCode != res.authCode ?
                     (
                       _this.$refs.authCodeId.classList.add('redTip'),
                       nptDates.authCode = "验证码有误",
                       new function () {
                         _this.$eventUntil.addEvent(_this.$refs.authCodeId,'click',function () {
                           this.classList.remove('redTip');
                           nptDates.authCode = '';
                         })
                       }
                     ) : String;
  // 验证成功
                   if(res.success === true) {
                        _this.setToken({token: res.token});    //store中的为token赋值
                         _this.$router.push('/index');
                   }
               }).catch(err => {
                 alert(err);
           })
        }
    }
  },
  watch: {
    form: {
      handler(val) {
        val.name != "" && val.password != "" && val.authCode != ""
          ? this.$refs.login_el.classList.add("skyblue")
          : this.$refs.login_el.classList.remove("skyblue");
      },
      // immediate: true,//监听初始表单value值
      deep: true //深度监听表单value值
    }
  },
  mounted() {
    let _this = this;
    let eventHadler = this.$eventUntil; //调用全局事件器函数
    let npt_el = this.$refs.form.getElementsByTagName("input"); //表单元素
    let npt_data = this.form; //绑定的各表单数据
    let nptTip = _this.tips; //绑定的各表单提示语
    this.$nextTick(function() {
      for (let x in npt_data) {  //遍历三项表单做事件操作
        eventHadler.addEvent(npt_el[x], "keyup", acg); //输入去除空格
        eventHadler.addEvent(npt_el[x], "click", removeTip); //点击取消placeholder提示
        eventHadler.addEvent(npt_el[x], "mouseleave", addTip); //点击取消placeholder提示
        eventHadler.addEvent(npt_el[x], "blur", blurTip); //失去焦点提示
        function acg() {
          npt_data[x] = npt_data[x].replace(/\s+/g, "");
          this.parentNode.style.borderColor = "#eceff0";
        }
        function removeTip() {
          this.placeholder = "";
        }
        function addTip() {
          let EL = this;
          tipHandler("name", nptTip.nameTip);
          tipHandler("password", nptTip.passTip);
          tipHandler("authCode", nptTip.authCodeTip);
          function tipHandler(m, z) {
            switch (x) {
              case (EL.name = m):
                EL.placeholder = z;
            }
          }
        }
        function blurTip() {
          let EL = this;
          tipHandler("name", nptTip.nameTip);
          tipHandler("password", nptTip.passTip);
          tipHandler("authCode", nptTip.authCodeTip);
          function tipHandler(m, z) {
            switch (x) {
              case (EL.name = m):
                EL.value === ""
                  ? (EL.parentNode.style.borderColor = "red")
                  : (EL.parentNode.style.borderColor = "#eceff0");
            }
          }
        }
      }
    }) 
  }
} 
</script>