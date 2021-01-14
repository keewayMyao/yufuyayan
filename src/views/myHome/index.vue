<template>
  <div class="app-container">
    <el-button type="primary" style="background-color: #64d9d6;border: none;margin-bottom: 5px" @click="back()">返回首页</el-button>
    <div class="user">
      <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="" id="avatar">
      <div class="userInfo">
        <div class="nickName">{{$store.state.user.nickName}}</div>
        <div class="userName">用户名：{{$store.state.user.userName}}</div>
        <div class="userRole">身份：{{$store.state.user.userRole}}</div>
      </div>
    </div>
    <div class="modify">
      <el-button @click="dialogNickName = true">修改昵称</el-button>
      <el-button @click="dialogUserPas = true">修改密码</el-button>
    </div>
    <!--*************************修改昵称***********************************-->
    <el-dialog title="" :visible.sync="dialogNickName" width="100%">
      <el-form ref="modifyForm" :model="modifyForm" >
        <el-form-item label="新昵称" prop="nickName">
          <el-input type="text" placeholder="请输入新昵称" v-model="modifyForm.newNickName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="modifyNickName(modifyForm.userId,modifyForm.newNickName)">修改</el-button>
          <el-button @click="dialogNickName = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--*************************修改密码***********************************-->
    <el-dialog title="" :visible.sync="dialogUserPas" width="100%">
      <el-form ref="modifyForm" :model="modifyForm" :rules="modifyRules">
        <el-form-item label="原密码" prop="userPas">
          <el-input type="password" placeholder="请输入原密码" v-model="modifyForm.userPas"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newUserPas">
          <el-input type="password" placeholder="请设置新密码" v-model="modifyForm.newUserPas"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="newUserPas2">
          <el-input type="password" placeholder="请确认新密码" v-model="modifyForm.newUserPas2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="modifyUserPas(modifyForm.userId, modifyForm.newUserPas, modifyForm.userPas)">修改</el-button>
          <el-button @click="dialogUserPas = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
<!--    <div>{{modifyForm.userId}}</div>-->
  </div>
</template>

<script>
import { updateNickName, updatePas } from "@/api/modify"

export default {
  name: 'myHome',
  data(){
    const validateNewUserPas2 = (rule, value, callback) => {
      if (value !== this.modifyForm.newUserPas) {
        callback(new Error('两次密码输入不一样'))
      } else {
        callback()
      }
    }
    //密码表单验证
    const validateNewUserPas = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }

    return {
      modifyForm: {
        userId: this.$store.state.user.userId,
        nickName: '',
        userPas: '',
        newNickName: '',
        newUserPas: '',
        newUserPas2: ''
      },
      modifyRules: {
        newUserPas2: {
          required: true,
          trigger: 'blur',
          validator: validateNewUserPas2
        },
        newUserPas: {
          required: true,
          trigger: 'blur',
          validator: validateNewUserPas
        }
      },
      userName: '',
      dialogNickName: false,
      dialogUserPas: false
    }
  },
  methods: {
    modifyNickName(userId, newNickName) {
      updateNickName(userId, newNickName).then(res => {
        // console.log(res)
        location.reload();
      })
    },
    modifyUserPas(userId, newPas, oldPas) {
      updatePas(userId, newPas, oldPas).then(res => {
        // console.log(res)
        location.reload();
      })
    },
    //返回上一页
    back() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  background-color: #ececec;
}
.user {
  width: 90vw;
  height: 30vw;
  display: flex;
  padding: 5vw;
  background-color: #ffffff;
  border-radius: 10px;
}
#avatar {
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
}
.userInfo {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}
.nickName,
.userName,
.userRole {
  font-weight: 500;
}
.nickName {
  font-size: 20px;
  flex: 1;
}
.userName {
  color: #999;
  flex: 1;
}
.userRole {
  color: #999;
}
.modify {
  margin: 3vw 0;
}
</style>
