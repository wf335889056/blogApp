<template>
  <aside class="w300 fl">
    <div class="search">
      <input v-model="value" type="text" placeholder="请输入关键字">
      <button @click="handle">搜索</button>
    </div>
    <div class="items">
      <h4>分类</h4>
      <ul class="list">
        <li><nuxt-link to='/article'>文章</nuxt-link></li>
        <li><nuxt-link to='/course'>历程</nuxt-link></li>
      </ul>  
    </div>
    <div class="items">
      <h4>热门推荐</h4>
      <ul class="list">
        <li class="flower transition"><nuxt-link to='/article'>文章</nuxt-link></li>
        <li class="flower transition"><nuxt-link to='/course'>历程</nuxt-link></li>
      </ul>  
    </div>
    <div class="items">
      <h4>点击排行</h4>
      <ul class="list">
        <li class="flower transition"><nuxt-link to='/article'>文章</nuxt-link></li>
        <li class="flower transition"><nuxt-link to='/course'>历程</nuxt-link></li>
      </ul>  
    </div>
    <div class="items">
      <h4>标签</h4>
      <ul class="tags">
        <li><a-tag color="#f50">#f50</a-tag></li>
        <li><a-tag color="#2db7f5">#2db7f5</a-tag></li>
        <li><a-tag color="#87d068">#87d068</a-tag></li>
        <li><a-tag color="#108ee9">#108ee9</a-tag></li>
      </ul>  
    </div>
    <div class="items">
      <h4>关注我</h4>
      <div class="qrcode"><img src="~/assets/qrcode.png" alt="qrcode"></div> 
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    val: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: this.val
    }
  },
  methods: {
    handle() {
      this.$emit('searchEmit', this.value)
    }
  }
})
</script>

<style lang="less" scoped>
  .search {
    margin-bottom: 20px;
    border-radius: 0 5px 5px 0;
    overflow: hidden;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      line-height: 36px;
      height: 36px;
      width: 72%;
      padding-left: 10px;
      border: 0;
      outline: none;
    }
    button {
      flex: 1;
      line-height: 36px;
      height: 36px;
      border: 0;
      outline: none;
      text-align: center;
      color: #fff;
      background-color: @hover_color;
    }
  }
  .items {
    background: rgba(255,255,255,0.5);
    margin-bottom: 20px;
    overflow: hidden;
    h4 {
      color: #333;
      font-size: 14px;
      line-height: 30px;
      padding-left: 20px;
      background: #fff;
    }
    .list {
      padding: 10px;
      overflow: hidden;
      li {
        margin-bottom: 10px;
        margin-left: 10px;
        &.flower {
          background: url('../assets/li.png') left center no-repeat;
          padding-left: 20px;
          margin-bottom: 5px;
        }
        a {
          color: #555;
          font-size: 15px;
        }
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      overflow: hidden;
      li {
        margin-bottom: 10px;
        margin-left: 10px;
      }
    }
    .qrcode {
      padding: 10px;
      overflow: hidden;
    }
  }
</style>