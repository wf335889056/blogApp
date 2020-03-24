<template>
  <div class="full-container">
    <div class="content">
			<DemoCanvas1 v-if="toggleShow == 1" />
      <DemoCanvas2 v-if="toggleShow == 2" />
		</div>
    <nav class="nav">
      <nuxt-link v-for="(item, index) in navs" 
        :key="`${item.title}-${index}`"
        :to="item.href" 
        class="gv"
      >{{item.title}}</nuxt-link>
      <a href="jvascript:void(0);" class="gv" @click="handleToggle">切换</a>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../utils/TweenLite.min.js'
import '../utils/EasePack.min.js'
import DemoCanvas1 from '../components/demoCanvas1.vue'
import DemoCanvas2 from '../components/demoCanvas2.vue'
import utils from '../utils/index'

export default Vue.extend({
	components: { DemoCanvas1, DemoCanvas2 },
	asyncData(context) {
		return { data: '111111' }
	},
	head () {
    return {
      title: '修仙宝典',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  data() {
    return {
      toggleShow: 1,
      navs: utils.navs().splice(1, utils.navs().length)
    }
	},
	mounted() {
		console.log(this)
	},
  methods: {
    handleToggle() {
      this.toggleShow = this.toggleShow == 1? 2 : 1
    }
  }
})
</script>

<style lang="less" scoped>
  .full-container {
    position: relative;
  }
  .full-container .nav{
	  width:670px;
	  height:auto;
	  position:absolute;
	  z-index:30;
	  top:420px;
	  left: 50%;
	  margin-left: -335px;
	}
  .full-container .nav a.gv { 
	  text-decoration:none; 
	  background: url('../assets/nav_gv.png') repeat 0px 0px; 
	  width: 130px; 
	  height: 43px; 
	  display: block; 
	  text-align:center;		/*水平居中*/
	  line-height:43px;  /*上下居中*/
	  cursor:pointer;
	  float:left;/*左浮动*/
	  margin:8px 2px 8px 2px;
	  font: 18px/43px 'microsoft yahei'; color:#066197;
	}
  .full-container .nav a.gv span {
	  display: none;
	}
  .full-container .nav a.gv:hover { 
	  background: url('../assets/nav_gv.png') repeat 0px -43px; 
	  color: #fff !important;
	  -webkit-box-shadow: 0 0 6px #1d7eb8;
	  transition-duration: 0.5s;
	}
  .full-container	.topcn{
	  width: 980px;
	  top:200px;
	  left: 50%;
	  margin-left: -490px;
	  position:absolute;
	  z-index:20;
	}
</style>
