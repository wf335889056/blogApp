<template>
  <div class="container">
    <LeftBlock @searchEmit="onSearchEmit" />
    <div class="main fl">
      <h2>留言</h2>
      <IssueForm :loading="loading" @submitEmit="onSubmitEmit" />
      <Comments :isLike="false" :count="10" @replyEmit="onReplyEmit" />
    </div>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LeftBlock from '../../components/leftBlock.vue'
import IssueForm from '../../components/issueForm.vue'
import Comments from '../../components/comments.vue'

export default Vue.extend({
  layout: 'blog',
  components: { LeftBlock, IssueForm, Comments },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    onSearchEmit(val: string) {
      console.log(val)
    },
    onSubmitEmit(val: string) {
      console.log(val)
      this.loading = true
      setTimeout(() => this.loading = false, 1000)
    }
  }
})
</script>

<style lang="less" scoped>
  .container {
    overflow: hidden;
  }
  .main {
    width: 870px;
    margin-left: 30px;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 50px;
    h2 {
      border-bottom: 2px solid @hover_color;
      line-height: 40px;
      font-size: 14px;
      padding-left: 10px;
      color: @hover_color;
    }
  }
</style>