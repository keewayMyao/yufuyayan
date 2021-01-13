<template>
  <div id="invite-bg" >
    <div class="block">
      <img style="width: 100%" src="@/assets/logo/logo1.jpg" alt="">
      <div class="required">
        <el-button
          type="primary"
          round
          style="width: 100%;
          background-color: #006370;
          border-color: #006370;
          /*color: #666;*/
          margin-bottom: 5%"  @click="jumpRegister">注册</el-button>
      </div>
      <div class="box bpx1">
        <ul>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
        </ul>
      </div>
      <div class="box box2">
        <ul>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
        </ul>
      </div>
      <div class="box box3">
        <ul>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
          <li>{{random()}}</li>
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
      name: '',
    }
  },
  methods:{
    jumpRegister() {
      this.$router.push(`/register?code=${this.code}`)
    },
    random() {
      var arr = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许',
      '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
      '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
      '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
      '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹',
      '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞',
      '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危' ];
      var arr1 = [500, 5000, 7500, 8000, 8500, 12000, 19800]
     return  arr[Math.floor((Math.random()*arr.length))]+'**获得玉币'+arr1[Math.floor((Math.random()*arr1.length))];
    }

  },
  mounted() {
   var url = window.location.hash;
   this.code = url.substring(14,20);
  }
}
</script>

<style scoped>
  #invite-bg {
    position: relative;
    width: 100vw;
    height: 100vh;
    /*background-color: #999;*/
  }
  #invite-bg img {
    margin: 10% 0;
    /*border-radius: 50%;*/
    width: 100%;
    /*height: 100%;*/
  }
  .required {
    display: flex;
    justify-content: center;
    margin: 1vh 0;
  }

  .box{
    position: relative;
    width: 90%;
    height: 5vh;
    /*background-color: #7f2424;*/
    line-height: 0px;
    margin: 0 auto  ;
    border: 1px solid #333;
    /*border-radius: 18px;*/
    overflow: hidden;
  }
  .bpx1 {
    margin-top: 2vh;
    border-radius: 18px 18px 0 0;
    border-bottom: none;
  }
  .box2 {
    border-bottom: none;
  }
  .box3 {
    border-radius: 0 0 18px 18px;
  }
  .box ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500%;
    /*background-color: pink;*/
    animation: broadcast 50s linear infinite;
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

  .block {
    width: 100vw;
    height: 100vh;
  }
</style>
