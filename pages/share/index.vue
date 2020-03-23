<template>
  <div class="container">
    <LeftBlock @searchEmit="onSearchEmit" />
    <div class="share fl">
      aaaaaaaaaaaaaaaaa 
    </div>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LeftBlock from '../../components/leftBlock.vue'

export default Vue.extend({
  layout: 'blog',
  components: { LeftBlock }
})
</script>

<style lang="less" scoped>
  .container {
    overflow: hidden;
  }
  .share {
    width: 870px;
    margin-left: 30px;
    padding: 20px;
    background-color: #fff;
    p {
      margin-bottom: 15px;
      font-size: 15px;
      color: #555;
    }
  }
</style>