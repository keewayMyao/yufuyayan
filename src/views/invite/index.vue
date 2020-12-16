<template>
  <div id="invite-bg" >
    <div class="block">
      <el-carousel trigger="click" interval="4000" height="800px" indicator-position="none">
        <el-carousel-item v-for="item in imageBox" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="incomeNum">
      <el-button type="primary" round>分享</el-button>
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
      imageBox:[{id:0,idView:require('@/assets/imagebox/sp-1.jpg')},
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
    z-index: 99;
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
