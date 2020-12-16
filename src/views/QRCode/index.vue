<template>
  <div id="qrc">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>我的邀请码</div>
      </div>
      <span class="code">{{this.$store.state.user.invitationCode}}</span>
      <div class="qrcode" ref="qrCodeUrl"></div>
    </el-card>
    <el-button style="float: right; padding: 3px 0" type="text">分享</el-button>
    <span class="text-cen" >邀请链接：cn-sz-ali-1.sakurafrp.com:40765/#/invite?code=${{this.$store.state.user.invitationCode}}&income=${{this.$store.state.user.income}}</span>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'

export default {
  name: 'index.vue',
  created() {
    console.log(this.$store.state.user.invitationCode)
    console.log(this.$store.state.user.income)
  },
  mounted() {
    var qrcode = new QRCode(this.$refs.qrCodeUrl, {
      text: `cn-sz-ali-1.sakurafrp.com:40765/#/invite?code=${this.$store.state.user.invitationCode}&income=${this.$store.state.user.income}`,
      width: 100,
      height: 100,
    })
    // console.log(qrcode)
  },
}
</script>

<style scoped>
#qrc{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-content: center;

}
.box-card{
  margin-left: 10%;
  width: 80%;
}
.code{
  height: 50px;
  width: 100%;
  text-align: center;
}
  .qrcode {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .text-cen {
    display: flex;
    justify-content: center;
  }
</style>
