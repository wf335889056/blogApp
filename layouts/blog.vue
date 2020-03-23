<template>
  <div>
    <Header />
    <main class="pdTop20"><nuxt /></main>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default Vue.extend({
  components: { Header, Footer }
})
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
