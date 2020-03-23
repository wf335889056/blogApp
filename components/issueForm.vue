<template>
  <div class="message">
    <div class="form">
      <div class="textarea"><textarea :placeholder="placeholeder" v-model="value"></textarea></div>
      <div class="button"><a-button type="primary" :loading="loading" shape="round" @click="handleSubmit">发布</a-button></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    placeholeder: {
      type: String,
      default: '必填, 留下你宝贵的建议...'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearchEmit(val: string) {

    },
    handleSubmit() {
      this.$emit('submitEmit', this.value)
    }
  }
})
</script>

<style lang="less" scoped>
  .message {
    padding: 20px;
    .form {
      box-shadow: inset 2px 2px 6px rgba(0,0,0,.08);
      border-radius: 4px;
      background: #f7f7f7;
      padding: 10px;
      .textarea {
      position: relative;
      overflow: hidden;
      padding: 8px 18px;
        textarea {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          display: block;
          height: 80px;
          line-height: 22px;
          font-size: 14px;
          background-attachment: scroll;
          resize: none;
          padding: 0;
        }
      }
      .button {
        padding-right: 20px;
        text-align: right;
      }
    }
  }
</style>