<template>
  <div id="large-header" class="large-header demo-2">
		<canvas id="demo-canvas"></canvas>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import callRAF from '../utils/rAF'
import { callAnimation2 } from '../utils/animation'

export default Vue.extend({
  mounted() {
    callRAF()
    callAnimation2()
  }
})
</script>