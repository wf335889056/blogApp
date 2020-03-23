<template>
  <div class="container">
    <LeftBlock @searchEmit="onSearchEmit" />
    <div class="course fl">
      <a-timeline>
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
        <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
        <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
      </a-timeline>
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
  .course {
    width: 870px;
    margin-left: 30px;
    padding: 20px;
    background-color: #fff;
  }
</style>