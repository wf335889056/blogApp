<<template>
  <div class="container">
    <LeftBlock @searchEmit="onSearchEmit" />
    <div class="detail fl">
      <div class="block">
        <h1>一个三十而立的男程序员真实讲述：代码搅乱我的生活</h1>
        <div class="info">
          <span>2018-07-24</span><span>5039 人已阅读</span><span>原创</span>  
        </div> 
        <div class="brief"><i>简介</i>讲述者：李仲 31岁 程序员记录者：杨丁 记者 荆楚网四年如一日 生活沉闷我做了四年程序员。这是非常沉闷的一个工作，如果对这行有爱好，还觉得比较有乐趣。如果光是为糊口，</div>
        <div class="content">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div> 
        <div class="like">
          <div class="icons" @click="handleLike">
            <a-icon v-show="!isLike" type="heart"  /> 
            <a-icon v-show="isLike" type="heart" theme="filled" />
            <p>很赞哦! ({{like}})</p>
          </div> 
        </div>
      </div>
      <div class="artcles">
        <p>上一篇：<nuxt-link :to="`/article/0`">上一篇文章</nuxt-link></p>
        <p>下一篇：<nuxt-link :to="`/article/3`">下一篇文章</nuxt-link></p>
      </div>
      <div class="comment">
        <h2>文章评论</h2>
        <IssueForm :loading="loading" @submitEmit="onSubmitEmit" />
      </div>
      <Comments />
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
      like: 50,
      isLike: false,
      loading: false
    }
  },
  mounted() {
  },
  methods: {
    onSearchEmit(val: string) {
      console.log(val)
    },
    onSubmitEmit(val: string) {
      console.log(val)
      this.loading = true
      setTimeout(() => this.loading = false, 1000)
    },
    handleLike() {
      this.isLike = true
      this.like = this.like + 1
    }
  }
})
</script>

<style lang="less" scoped>
  .container {
    overflow: hidden;
  }
  .detail {
    background-color: #fff;
    width: 870px;
    margin-left: 30px;
    padding-bottom: 50px;
    .block {
      padding: 0 30px;
      h1 {
        font-size: 24px;
        font-weight: normal;
        padding: 20px 0;
        color: #333
      }
      .info {
        span {
          display: inline-block;
          margin-right: 20px;
          font-size: 15px;
          color: #555;
        }
      }
      .brief {
        color: #888888;
        border: 1px solid #F3F3F3;
        padding: 10px;
        margin: 20px auto 15px auto;
        line-height: 23px;
        background: none repeat 0 0 #F6F6F6;
        font-size: 14px;
        i {
          color: #38485A;
          font-weight: 400 !important;
          font-size: 13px;
          padding-right: 8px;
        }
      }
    }
    .content {
      margin-bottom: 20px;
      p {
        margin-bottom: 15px;
        color: #555;
        font-size: @default_fontSize;
      }
    }
    .like {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icons {
        width: 160px;
        height: 40px;
        margin: auto;
        background: #E2523A;
        color: #fff;
        box-shadow: 1px 2px 6px 0px rgba(0,0,0,.2);
        border-radius: 3px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        p {
          margin-left: 10px;
        }
      }
    }
    .artcles {
      line-height: 24px;
      width: 100%;
      overflow: hidden;
      margin: 20px 0;
      p {
        padding: 4px 10px;
        border-radius: 5px;
        color: #555;
        font-size: @default_fontSize;
        a {
          color: #555;
          font-size: @default_fontSize;
          &:hover {
            text-decoration: underline !important;
          }
        }
      }
    }
    .comment {
      h2 {
        border-bottom: 2px solid @hover_color;
        line-height: 40px;
        font-size: 14px;
        padding-left: 10px;
        color: @hover_color;
      }
    }
  }
</style>