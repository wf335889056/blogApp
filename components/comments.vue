<template>
  <div class="comments">
    <div class="like-num"><i>100</i>条评论</div>
    <ul class="list">
      <li v-for="(item, index) in list" :key="`comment-${index}`">
        <div class="image fl"><img src="~/assets/user_03.jpg" alt="avatar image"></div>
        <div class="text fr">
          <div class="name">昵称两只老虎  <span>昨天17:16</span></div>
          <p>这里是内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
        </div>
        <div class="icons fl">
          <span @click="handleLike">
            <a-icon v-show="!isLike" type="like" style="color:#666;font-size:14px;" />  
            <a-icon v-show="isLike" type="like" theme="filled" style="color:#666;font-size:14px;" />
            <i v-show="count !== 0">{{count}}</i>
          </span>
          <span @click="handleComment">
            <a-icon type="form" style="color:#666;font-size:14px;" />
          </span>  
        </div> 
        <IssueForm v-show="isShow" style="float: left; width: 100%;" :loading="loading" @submitEmit="onSubmitEmit" />
        <div class="clear"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IssueForm from './issueForm.vue'

export default Vue.extend({
  components: { IssueForm },
  props: {
    list: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6]
    },
    isLike: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loading: false,
      isShow: false
    }
  },
  methods: {
    handleLike() {

    },
    handleComment() {
      this.isShow = !this.isShow
    },
    onSubmitEmit(val: string) {
      this.loading = true
      this.$emit('replyEmit', val)
      setTimeout(() => this.loading = false, 1000)
    }
  }
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
        padding-bottom: 20px;
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
              margin-left: 20px;
            }
          }
          p {
            line-height: 26px;
            font-size: 14px;
            word-wrap: break-word;
            color: #555;
          }
        }
        .icons {
          width: 100%;
          text-align: right;
          padding-right: 30px;
          span {
            display: inline-block;
            margin-left: 40px;
            cursor: pointer;
            i {
              font-size: 14px;
              color: #666;
            }
          }
        }
      }
    }
  }
</style>