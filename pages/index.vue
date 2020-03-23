<template>
  <div class="container">
    这里是主体
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '../components/Logo.vue'

export default Vue.extend({
  layout: 'blog',
  components: {
    Logo
  }
})
</script>

<style lang="less" scoped>

</style>
