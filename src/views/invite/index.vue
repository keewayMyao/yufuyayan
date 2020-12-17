<template>
  <div id="invite-bg" >
    <div class="block">
      <el-carousel
        trigger="click"
        interval="4000"
        height="60vh"
        indicator-position="none"
        type="card">
        <el-carousel-item v-for="item in imageBox" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
      <div class="required">
        <el-button
          type="primary"
          round
          style="width: 100%;
          background-color: pink;
          border-color: pink;
          color: #666"  @click="jumpRegister">注册</el-button>
      </div>
      <div class="box">
        <ul>
          <li>小阿斌邀请了小阿斌111</li>
          <li>小阿斌邀请了小阿斌222</li>
          <li>小阿斌邀请了小阿斌333</li>
          <li>小阿斌邀请了小阿斌444</li>
          <li>小阿斌邀请了小阿斌555</li>
          <li>小阿斌邀请了小阿斌666</li>
          <li>小阿斌邀请了小阿斌777</li>
          <li>小阿斌邀请了小阿斌888</li>
          <li>小阿斌邀请了小阿斌999</li>
          <li>小阿斌邀请了小阿斌101010</li>
          <li>小阿斌邀请了小阿斌111</li>
        </ul>
      </div>
      <div class="box">
        <ul>
          <li>小阿斌邀请了小阿斌111</li>
          <li>小阿斌邀请了小阿斌222</li>
          <li>小阿斌邀请了小阿斌333</li>
          <li>小阿斌邀请了小阿斌444</li>
          <li>小阿斌邀请了小阿斌555</li>
          <li>小阿斌邀请了小阿斌666</li>
          <li>小阿斌邀请了小阿斌777</li>
          <li>小阿斌邀请了小阿斌888</li>
          <li>小阿斌邀请了小阿斌999</li>
          <li>小阿斌邀请了小阿斌101010</li>
          <li>小阿斌邀请了小阿斌111</li>
        </ul>
      </div>
      <div class="box">
        <ul>
          <li>小阿斌邀请了小阿斌111</li>
          <li>小阿斌邀请了小阿斌222</li>
          <li>小阿斌邀请了小阿斌333</li>
          <li>小阿斌邀请了小阿斌444</li>
          <li>小阿斌邀请了小阿斌555</li>
          <li>小阿斌邀请了小阿斌666</li>
          <li>小阿斌邀请了小阿斌777</li>
          <li>小阿斌邀请了小阿斌888</li>
          <li>小阿斌邀请了小阿斌999</li>
          <li>小阿斌邀请了小阿斌101010</li>
          <li>小阿斌邀请了小阿斌111</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invite',
  data() {
    return{
      code:"",
      income:"",
      imageBox:[
        {id:0,idView:require('@/assets/imagebox/sp-1.jpg')},
        {id:1,idView:require('@/assets/imagebox/sp-2.jpg')},
        {id:2,idView:require('@/assets/imagebox/sp-3.jpg')},
        {id:2,idView:require('@/assets/imagebox/sp-4.jpg')},
        {id:2,idView:require('@/assets/imagebox/sp-5.jpg')},
        {id:2,idView:require('@/assets/imagebox/sp-6.jpg')}
      ]
    }
  },
  methods:{
    jumpRegister() {
      this.$router.push(`/register?code=${this.code}`)
    }
  },
  mounted() {
   var url = window.location.hash;
   this.code = url.substring(14,20);
    console.log(this.code)
   this.income = url.substring(28);
  }
}
</script>

<style scoped>
  #invite-bg {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #3b9ea7;
  }
  #invite-bg img {
    width: 100%;
    height: 100%;
  }
  .required {
    display: flex;
    justify-content: center;
    margin: 4% 0;
  }

  .box{
    position: relative;
    width: 90%;
    height: 40px;
    background-color: #fdfbfb;
    line-height: 5px;
    margin: 3% auto  ;
    /*border: 1px solid pink;*/
    border-radius: 18px;
    overflow: hidden;
  }
  .box ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500%;
    animation: broadcast 40s linear infinite;
  }
  .box ul li{
    width: 100%;
    height: 20%;

    /*line-height: em;*/
    /*padding-left: 10px;*/
  }
  @keyframes broadcast {
    0%{top: 0;}
    5%{top: -100%;}
    10%{top: -100%;}
    15%{top: -200%;}
    20%{top: -200%;}
    25%{top: -300%;}
    30%{top: -300%;}
    35%{top: -400%;}
    40%{top: -400%;}
    45%{top: -500%;}
    50%{top: -500%;}
    55%{top: -600%;}
    60%{top: -600%;}
    65%{top: -700%;}
    70%{top: -700%;}
    75%{top: -800%;}
    80%{top: -800%;}
    85%{top: -900%;}
    90%{top: -900%;}
    95%{top: -1000%;}
    100%{top: -1000%;}
  }

  el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .block {
    width: 100%;
    height: 100%;
  }
</style>
