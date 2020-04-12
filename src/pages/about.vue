<template >
  <Layout v-slot="slotProps">
    <div class="hello">
      <button @click="increment">
        Count is: {{ state.count }}, double is: {{ state.double }}
      </button>
      <v-btn @click="slotProps.handleToggleAlert" class="ma-2" outlined color="indigo">Outlined Button</v-btn>
    </div>
    </Layout>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'
import Layout from '../components/base-layout'
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
  methods: {
   
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
