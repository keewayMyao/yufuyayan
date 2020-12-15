<template>
  <div id="invite-bg" @click="jumpRegister">
    <img src="@/icons/jpg/yufuyayan.jpg" alt="">
    <h4 class="incomeNum">
      <span>已赚佣金：{{income}}元</span>
      <br>
      <span>邀请码：{{ code }}</span>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'invite',
  data() {
    return{
      code:"",
      income:"",
    }
  },
  methods:{
    jumpRegister() {
      this.$router.push('/register')
    }
  },
  mounted() {
   var url = window.location.hash;
   this.code = url.substring(14,20);
   this.income = url.substring(28);
  }
}
</script>

<style scoped>
  #invite-bg {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #invite-bg img {
    width: 100%;
    height: 100%;
  }
  .incomeNum {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%,0);
    color: #2b4b45;
  }
</style>
