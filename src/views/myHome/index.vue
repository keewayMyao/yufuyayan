<template>
  <div class="app-container">
    <el-button type="primary" style="background-color: #64d9d6;border: none" @click="$router.push('/')">返回首页</el-button>
    <div class="user">
      <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="" id="avatar">
      <div class="userInfo">
        <div class="nickName">{{$store.state.user.nickName}}</div>
        <div class="userName">用户名：{{$store.state.user.userName}}</div>
        <div class="userRole">身份：{{$store.state.user.userRole}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  data(){
    return {
      userName: ''
    }
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
  height: 20vh;
  display: flex;
  padding: 5%;
  background-color: #ffffff;
  border-radius: 10px;
}
#avatar {
  width: 31%;
  height: 100%;
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
</style>
