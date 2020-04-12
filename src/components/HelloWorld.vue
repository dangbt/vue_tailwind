<template>
  <div class="hello">
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ double }}
    </button>
  </div>
</template>
<script>
export default {
 data() {
   return {
    state: {
      count: 0
    }
  }
 },
  computed: {
    double: function () {
      return this.state.count * 2
    }
  },
  methods: {
    increment() {
      this.state.count++
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
