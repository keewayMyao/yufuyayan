<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
             label-position="left"
    >

      <div class="title-container">
        <h3 class="title">注册</h3>
      </div>

      <el-form-item prop="nickName">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input ref="nickName" v-model="loginForm.nickName" placeholder="昵称" name="nickName" type="text"
                  tabindex="1" auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="userName">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input ref="userName" v-model="loginForm.userName" placeholder="用户名" name="userName" type="text"
                  tabindex="1" auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="userPas">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input :key="passwordType" ref="userPas" v-model="loginForm.userPas" :type="passwordType"
                  placeholder="密码" name="userPas" tabindex="2" auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
      </el-form-item>

      <el-form-item prop="invitationCode">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input ref="invitationCode" v-model="loginForm.invitationCode"  placeholder="邀请码" name="invitationCode"
                  type="text"
                  tabindex="1" auto-complete="on"
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="poshRegister">注册</el-button>
      <el-button style="width:100%;margin-bottom:20px;margin-left:0px" @click="returnLogin">返回</el-button>
    </el-form>
  </div>
</template>

<script>
import { register } from '@/api/register'

export default {
  name: 'Login',
  data() {
    const validateNickName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'))
      } else {
        callback()
      }
    }
    const validateUserName = (rule, value, callback) => {
      if (!(/^[0-9A-Za-z]{6,24}$/).test(value)) {
        callback(new Error('用户名格式不正确'))
      } else {
        callback()
      }
    }
    const validateUserPas = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入密码（不得小于6位数）'))
      } else {
        callback()
      }
    }
    const validateInvitationCode = (rule, value, callback) => {
      if (!(value.length === 6)) {
        callback(new Error('邀请码不正确'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        nickName: '',//昵称
        userName: '',//用户名
        userPas: '',//密码
        invitationCode: '' //邀请码
      },
      loginRules: {
        nickName: [{
          required: true,
          trigger: 'blur',
          validator: validateNickName
        }],
        userName: [{
          required: true,
          trigger: 'blur',
          validator: validateUserName
        }],
        userPas: [{
          required: true,
          trigger: 'blur',
          validator: validateUserPas
        }],
        invitationCode: [{
          required: true,
          trigger: 'blur',
          validator: validateInvitationCode
        }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      code: ''
    }
  },
  //从链接上拿到邀请码
  mounted() {
    var url = window.location.hash;
    this.loginForm.invitationCode = url.substring(16,22);
    // console.log(this.loginForm.invitationCode)
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.userPas.focus()
      })
    },
    //注册成功提示弹框
    openSuccess() {
      this.$alert('注册成功！', '注册', {
        confirmButtonText: '确定',
        callback: () => {
          this.$message({
            type: 'success ',
            message: `注册成功！`
          })
          //注册成功之后跳回登录页面
          this.$router.push('/login')
        }
      })

    },
    //注册失败提示弹框
    openFail() {
      this.$alert('注册失败！', '注册', {
        confirmButtonText: '确定',
        callback: () => {
          // this.$message({
          //   type: 'error',
          //   message: `注册失败`
          // })
        }
      })
    },
    //注册
    poshRegister() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          register(this.loginForm.nickName, this.loginForm.userName, this.loginForm.userPas, this.loginForm.invitationCode).then((res) => {
            if (res.code === 200) {
              this.openSuccess()
              this.loading = false
            }
          }).catch(() => {
            this.openFail()
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    returnLogin() {
      this.$router.push('/login')
    }
  }
}

</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 80px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

</style>
