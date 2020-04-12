<template>
  <Layout>
    <div class="hello">
      <button @click="increment">
        Count is: {{ state.count }}, double is: {{ state.double }}
      </button>
    </div>
    </Layout>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'
import Layout from '../components/layout'
export default {
  components: {
    Layout
  },
   setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  },
  beforeCreate: function () {
    console.log('before create')
  },
  created: function () {
    console.log('created')
  },
  beforeMount: function () {
    console.log('beforeMount')
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('updated')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },
  destroyed: function () {
    console.log('destroyed')
  },
}
</script>
