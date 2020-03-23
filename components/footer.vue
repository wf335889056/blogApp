<template>
  <footer class="footer">Design by 个人博客 <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">备案号：浙ICP备11002373号-1</a></footer>  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style lang="less">
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a5a4a4;
    font-size: @default_fontSize;
    height: 50px;
    a {
      color: #a5a4a4;
      margin-left: 10px;
    }
    // text-align: center;
  }
</style>