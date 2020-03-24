<template>
  <div id="large-header" class="large-header demo-1">
		<canvas id="demo-canvas"></canvas>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import callRAF from '../utils/rAF'
import { callAnimation1 } from '../utils/animation'

export default Vue.extend({
  mounted() {
    callRAF()
    callAnimation1()
  }
})
</script>