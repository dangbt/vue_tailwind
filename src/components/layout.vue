<template>
  <div class="container mx-auto">
    <nav class="flex justify-between border-b-2 py-2">
      <div>
        <img @click="handle_back" class="text-center mx-auto" width="40" alt="Vue logo" src="../assets/logo.png">
      </div>
      <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      </div>
    </nav>
     <slot/>
    <footer>
      &copy; Awesome Company
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    handle_back() {
       this.$router.push('/')
    }
  }
}
</script>