<template>
  <div class="comments">
    <div class="like-num"><i>100</i>条评论</div>
    <ul class="list">
      <li>
        <div class="image fl"><img src="~/assets/user_03.jpg" alt="avatar image"></div>
        <div class="text fr">
          <div class="name">昵称两只老虎  <span>昨天17:16</span></div>
          <p>这里是内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
        </div>
        <div class="clear"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="less" scoped>
  .comments {
    padding: 0 20px;
    .like-num {
      font-size: @default_fontSize;
      margin: 30px 0;
      i {
        color: #f90;
        font-family: Arial;
        margin-right: 2px;
      }
    }
    .list {
      li {
        margin: 30px 0;
        clear: both;
        border-bottom: 1px solid #f1f1f1;
        padding-bottom: 30px;
        overflow: hidden;
        position: relative;
        padding-left: 60px;
        .image {
          margin-left: -60px;
          img {
            width: 42px;
            height: 42px;
            border-radius: 100%;
          }
        }
        .text {
          width: 100%;
          .name {
            margin-bottom: 10px;
            color: #444;
            font-size: 14px;
            font-weight: 700;
            span {
              color: #aaa;
              font-size: 12px;
              font-weight: 500;
            }
          }
          p {
            line-height: 26px;
            font-size: 14px;
            word-wrap: break-word;
            color: #555;
          }
        }
      }
    }
  }
</style>