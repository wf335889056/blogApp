<<template>
  <div class="container">
    <LeftBlock @searchEmit="onSearchEmit" />
    <div class="articles fl">
      <div class="item" v-for="(item, index) in list" :key="`article-${item}`">
        <nuxt-link :to="`/article/${index}`" target="_blank">
          <div class="text">
            <h5>一个三十而立的男程序员真实讲述：代码搅乱我的生活</h5>
            <p class="text2Overflow">讲述者：李仲 31岁 程序员记录者：杨丁 记者 荆楚网四年如一日 生活沉闷我做了四年程序员。这是非常沉闷的一个工作，如果对这行有爱好，还觉得比较有乐趣。如果光是为糊口，</p>
          </div>
          <div class="image"><img class="transition" src="../../assets/37b2762ee25cd73e39019c57eb6c6135.jpg" /></div>
        </nuxt-link>
      </div>
      <NoData v-show="list.length == 0" />
    </div>  
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LeftBlock from '../../components/leftBlock.vue'
import NoData from '../../components/noData.vue'

export default Vue.extend({
  layout: 'blog',
  components: { LeftBlock, NoData },
  data() {
    return {
      list: []
    }
  },
  mounted() {
  },
  methods: {
    onSearchEmit(val: string) {
      console.log(val)
    }
  }
})
</script>

<style lang="less" scoped>
  .container {
    overflow: hidden;
  }
  .articles {
    width: 870px;
    margin-left: 30px;
    .item {
      margin-bottom: 20px;
      a {
        display: flex;
        background: rgba(255,255,255,0.8);
        padding: 15px;
        overflow: hidden;
        color: #797b7c;
        .text {
          flex: 1;
          h5 {
            font-size: @default_fontSize;
            line-height: 25px;
            text-shadow: #FFF 1px 1px 1px;
            color: #222;
            font-weight: bold;
            &:hover {
              color: @primary_color;
              text-decoration: underline;
            }
          }
          p {
            margin: 20px 0 0 0;
            line-height: 22px;
            font-size: 14px;
          }
        }
        .image {
          width: 150px;
          max-height: 120px;
          overflow: hidden;
          img {
            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
</style>