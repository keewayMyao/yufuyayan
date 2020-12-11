<template>
  <div id="app">
    <router-view />
    <div id="app-foot">由安厦网络科技传媒（深圳）有限公司提供技术支持</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>

  #app-foot{
    display: flex;
    justify-content: center;
    padding: 0 0 30px;
    color: #999;
    font-size: small;
  }
</style>
