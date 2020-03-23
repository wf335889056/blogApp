<template>
  <header class="top-bar">
    <div class="container">
      <div class="logo transition">个人博客</div>
      <div class="nav">
        <div class="menus">
          <nuxt-link v-for="(item, index) in navs" 
            :key="`${item.title}-${index}`"
            :to="item.href" 
            :class="currIndex == index? 'active link' : 'link'"
          >
            {{item.title}}
          </nuxt-link>
        </div>
        <div class="user">
          <a-button type="primary" size="small">登陆</a-button>
          <a-button type="danger" size="small">注册</a-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import utils from '../utils/index'
export default Vue.extend({
  data() {
    return {
      navs: utils.navs
    }
  },
  mounted() {
    console.log(this.$route)
    console.log(this.$router)
  },
  computed: {
    currIndex(): number {
      if (this.$route.path == '/') return 0
      let href: string = this.$route.path.split('/')[1]
      let index: number = 0
      for (let i = 0; i < this.navs.length; i++) {
        if (this.navs[i].href.includes(href) && i !== 0) index = i
      }
      return index
    }
  }
})
</script>

<style lang="less">
  .top-bar {
    // position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: rgba(255,255,255,.9);
    text-align: center;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 1px 1px rgba(0,0,0,.04);
    z-index: 9999;
  }
  .container {
    overflow: hidden;
    .logo {
      float: left;
      font-size: 22px;
      color: @default_color;
      cursor: pointer;
      &:hover {
        color: @hover_color;
      }
    }
    .nav {
      float: right;
      display: inline-flex;
      justify-content: center;
      align-content: center;
      .menus {
        .link {
          padding-left: 30px;
          font-size: @default_fontSize;
          color: @default_color;
          &.active {
            color: @primary_color;
          }
        }
      }
      .user {
        margin-left: 50px;
      }
    }
  }
</style>