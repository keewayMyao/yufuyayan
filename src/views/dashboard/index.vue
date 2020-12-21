<template>
  <div class="app-container">
    <h2 class="header">公司介绍</h2>
    <p style="text-indent: 2em;">深圳市玉肤颜生物科技有限公司，是一家集美
      容健康产业链.研发.生产.销售.培训教育.加盟.投资为一
      体的现代化企业。我们是解决色斑.痤疮.枯黄.激
      素脸.敏感肌.细纹.松弛.提亮肤色,衰老等问题性
      皮肤的行业专家，玉肤颜独特的美容理念；远
      离化妆品对皮肤的侵害，回归健康肌肤的本色，
      缔造素颜美的你！玉肤颜产品自上市以来，产
      品与技术受到广大用户的广好评与信赖！
    </p>
    <h3>产品概念</h3>
    <img src="@/assets/img-home/h-1.png" alt="">
    <img src="@/assets/img-home/h-2.png" alt="">
    <img src="@/assets/img-home/h-3.png" alt="">
    <img src="@/assets/img-home/h-4.png" alt="">
    <img src="@/assets/img-home/h-5.png" alt="">
    <img src="@/assets/img-home/h-6.png" alt="">
    <img src="@/assets/img-home/h-7.png" alt="">
    <img src="@/assets/img-home/h-8.png" alt="">
    <h3>产品介绍</h3>
    <img src="@/assets/img-home/h-9.png" alt="">
    <img src="@/assets/img-home/h-10.png" alt="">
    <img src="@/assets/img-home/h-11.png" alt="">
    <img src="@/assets/img-home/h-12.png" alt="">
    <img src="@/assets/img-home/h-13.png" alt="">
    <img src="@/assets/img-home/h-14.png" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'Dashboard',
  data(){
    return{
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
  background-color: #1e4c4c;
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
</style>
