<template>
  <Layout v-slot="slotProps">
    <HomePage :handleToggleAlert="slotProps.handleToggleAlert" />
  </Layout>
</template>

<script>
import HomePage from '../components/home-page.vue'
import Layout from '../components/base-layout'

export default {
  name: 'App',
  components: {
    HomePage,
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
