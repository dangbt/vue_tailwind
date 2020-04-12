<template>
  <Layout>
    <HelloWorld />
  </Layout>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Layout from '../components/layout'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
