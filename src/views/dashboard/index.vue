<template>
  <div class="app-container">
    <img  src="@/assets/logo/logo.jpg" alt="">
    <h2 class="header">企业文化</h2>
    <p style="text-indent: 2em;">深圳市玉肤颜生物科技有限公司，是一家集美
      容健康产业链.研发.生产.销售.培训教育.加盟.投资为一
      体的现代化企业。我们是解决色斑.痤疮.枯黄.激
      素脸.敏感肌.细纹.松弛.提亮肤色,衰老等问题性
      皮肤的行业专家，玉肤颜独特的美容理念；远
      离化妆品对皮肤的侵害，回归健康肌肤的本色，
      缔造素颜美的你！玉肤颜产品自上市以来，产
      品与技术受到广大用户的广好评与信赖！
    </p>
<!--    <h3>产品概念</h3>-->
<!--    <img src="@/assets/img-home/h-1.png" alt="">-->
<!--    <img src="@/assets/img-home/h-2.png" alt="">-->
    <img src="@/assets/img-home/h-3.png" alt="">
    <img src="@/assets/img-home/h-4.png" alt="">

    <div class="role">
      <div class="roleImg">
        <img src="@/assets/img-home/rw-1.png" alt="">
      </div>
      <div class="roleImg">
        <img src="@/assets/img-home/rw-2.png" alt="">
      </div>
      <div class="roleImg">
        <img src="@/assets/img-home/rw-3.png" alt="">
      </div>
    </div>
    <img src="@/assets/img-home/rw-4.png" alt="">
<!--    <img src="@/assets/img-home/h-5.png" alt="">-->
    <img src="@/assets/img-home/h-6.png" alt="">
    <img src="@/assets/img-home/h-8.png" alt="">
    <img src="@/assets/img-home/h-7.png" alt="">
    <h3>产品介绍</h3>
    <div class="cpImg">
      <img src="@/assets/img-home/h-9.png" alt="">
      <div class="cpName">
        <div @click="dialogCp1 = true">臻萃焕颜精华水</div>
        <div @click="dialogCp2 = true">臻萃焕颜精华乳</div>
        <div @click="dialogCp3 = true">臻萃焕颜滋养霜</div>
        <div @click="dialogCp4 = true">光采焕颜靓肤霜</div>
        <div @click="dialogCp5 = true">清透赋活盈润面膜</div>
        <div @click="dialogCp6 = true">贻贝水光修护原液</div>
        <div @click="dialogCp7 = true">臻萃润养修护啫喱</div>
      </div>
    </div>
    <!--**************************产品1*******************************************-->
    <el-dialog title="臻萃焕颜精华水" :visible.sync="dialogCp1" width="100%" height="100%">
      <div >
        <img src="@/assets/img-home/h-10.png" alt="">
      </div>
    </el-dialog>
    <!--**************************产品1*******************************************-->
    <el-dialog title="臻萃焕颜精华乳" :visible.sync="dialogCp2" width="100%" height="80%">
      <div >
        <img src="@/assets/img-home/h-11.png" alt="">
      </div>
    </el-dialog>
    <!--**************************产品1*******************************************-->
    <el-dialog title="臻萃焕颜滋养霜" :visible.sync="dialogCp3" width="100%" height="80%">
      <div >
        <img src="@/assets/img-home/h-12.png" alt="">
      </div>
    </el-dialog>
    <!--**************************产品1*******************************************-->
    <el-dialog title="光采焕颜靓肤霜" :visible.sync="dialogCp4" width="100%" height="80%">
      <div >
        <img src="@/assets/img-home/h-13.png" alt="">
      </div>
    </el-dialog>
    <!--**************************产品1*******************************************-->
    <el-dialog title="清透赋活盈润面膜" :visible.sync="dialogCp5" width="100%" height="80%">
      <div >
        <img src="@/assets/img-home/h-14.png" alt="">
      </div>
    </el-dialog>
    <!--**************************产品1*******************************************-->
    <el-dialog title="贻贝水光修护原液" :visible.sync="dialogCp6" width="100%" height="80%">
      <div >
        <img src="@/assets/img-home/h-15.png" alt="">
      </div>
    </el-dialog>
    <!--**************************产品1*******************************************-->
    <el-dialog title="臻萃润养修护啫喱" :visible.sync="dialogCp7" width="100%" height="80%">
      <div >
        <img src="@/assets/img-home/h-16.png" alt="">
      </div>
    </el-dialog>
<!--    <img src="@/assets/img-home/h-10.png" alt="">-->
<!--    <img src="@/assets/img-home/h-11.png" alt="">-->
<!--    <img src="@/assets/img-home/h-12.png" alt="">-->
<!--    <img src="@/assets/img-home/h-13.png" alt="">-->
<!--    <img src="@/assets/img-home/h-14.png" alt="">-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'Dashboard',
  data(){
    return{
      dialogCp1: false,
      dialogCp2: false,
      dialogCp3: false,
      dialogCp4: false,
      dialogCp5: false,
      dialogCp6: false,
      dialogCp7: false,
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
  },
  created() {
  },
  methods: {

    },
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  background-color:#304156;
  margin-left: 1%;
}
p{
  color: #ffffff;
}
h2,
h3  {
  text-align: center;
  color: #ffffff;
}
img {
  width: 100%;
}
.role {
  display: flex;
}
.roleImg div{
  flex: 1;
}
.cpImg {
  position: relative;
}
.cpName {
  position: absolute;
  top: 21%;
  left: 52%;
  z-index: 999;
}
.cpName div {
  //font-weight: 700;
  margin: 1vw 0;
  font-size: 3vw;
  color:#000;
}


</style>
