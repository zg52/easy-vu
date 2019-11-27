<style lang="less" scoped>
@import '../.././assets/css/public.less';
    #login {
        width: 100vw;
        height: 100vh;
        background: url('../.././assets/image/login.jpg') top center no-repeat;
    }
    .form {
        .w(685);
        background: #fff;
        position: absolute;
        right:20%;
        div div {.t-center;.mb(30);}
        h4 {.t-center;
            color: #138de3;
            .fz(38);
            .pt(100);
        }
        h4 {.mb(95);}
    
        label {
        .w(440);
        .h(70);
        border:1px #eceff0 solid;
        .d-in-block;
       span {line-height: 33px;.d-in-block;.pr(26);border-right: 1px #eceff0 solid;
       img {vertical-align: middle;}
       }
       input {.h(70);.d-in-block;.ml(30);.w(280);background: transparent;border:none; .fz(20);}
       input::-webkit-input-placeholder {
           color: #c8cace;
       }
    }
    button {
        .w-h(440,70);
        background: skyblue;
        .fz(20);
        .t-center;

    }
    .auth_code {
        input {
            margin-left: 0;
        }
        span {border:none;}
    }
    }
</style>
<template>
  <div id="login">
      <div class="form">
           <form>
                <div>
                    <h4>lonarui商城系统管理</h4>
                  <div><label for="name">
                      <span><img src="../.././assets/image/login-1.png" alt=""></span>
                      <input 
                       type="text"
                       name="name"
                       placeholder="账户名"
                       v-model="name"
                        @keyup="name = name.replace(/\s+/g, '')"
                        maxlength="6"
                      >
                  </label></div>
                  <div><label for="password">
                      <span><img src="../.././assets/image/login-2.png" alt=""></span>
                      <input 
                      type="text"
                      name="password"
                      placeholder="输入密码"
                      v-model="password"
                      @keyup="password = password.replace(/\s+/g,'')"
                      >
                  </label></div>
                  <div class="auth_code">
                      <label for="">
                          <input 
                          type="text"
                           name="password"
                           placeholder="输入密码"
                           v-model="password"
                           @keyup="password = password.replace(/\s+/g,'')"
                          >
                          <span><img src="../.././assets/image/login-3.png" alt=""></span>
                      </label>
                  </div>
                  <button>登录</button>
                </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
             name:'',
             password:''
        }
    },
    mounted() {
        
    },
}
</script>