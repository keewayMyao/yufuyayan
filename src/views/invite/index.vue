<template>
  <div id="invite-bg" >
    <div class="block">
      <el-carousel trigger="click" interval="4000" height="400px" indicator-position="none" type="card">
        <el-carousel-item v-for="item in imageBox" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
      <div class="required">
        <el-button  type="primary" round style="width: 100%; background-color: pink; border-color: pink; color: #666" >注册</el-button>
      </div>
      <div class="box">
        <ul>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
        </ul>
      </div>
      <div class="box">
        <ul>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
        </ul>
      </div>
      <div class="box">
        <ul>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
          <li>小阿斌邀请了小阿斌</li>
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
    background-color: #3b9ea7;
  }
  #invite-bg img {
    width: 100%;
    height: 100%;
  }
  .required {
    display: flex;
    justify-content: center;
    margin-bottom: 4%;
  }

  .box{
    position: relative;
    width: 90%;
    height: 6%;
    margin: 3% auto  ;
    border: 1px solid pink;
    overflow: hidden;
  }
  .box ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500%;
    /*animation: czlb 10s linear infinite;*/
  }
  .box ul li{
    width: 100%;
    height: 25%;

    /*line-height: em;*/
    /*padding-left: 10px;*/
  }
  /*@keyframes czlb {*/
  /*  0%{top: 0;}*/
  /*  10%{top: -100%;}*/
  /*  25%{top: -100%;}*/
  /*  35%{top: -200%;}*/
  /*  50%{top: -200%;}*/
  /*  65%{top: -300%;}*/
  /*  75%{top: -300%;}*/
  /*  85%{top: -400%;}*/
  /*  100%{top: -400%;}*/
  /*}*/

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
