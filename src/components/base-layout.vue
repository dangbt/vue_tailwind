<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="state.drawer"
      app
    >
      <v-list dense>
        <router-link v-for="item of state.navigationList" :key="item.title"  :to="item.link">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="state.drawer = !state.drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class=""
        fluid
      >
        <slot v-bind:handleToggleAlert="handleToggleAlert" ></slot>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
     <v-alert
      dismissible
      transition="slide-x-reverse-transition"
      class="alert" width="400px" :value="state.toggleAlert" type="success">
      I'm a success alert.
    </v-alert>
  </v-app>
</template>

<script>
  import { navigationList } from '../constants'
  export default {
    data() {
      const width = window.innerWidth
    const state = {
        drawer: width > 1260,
        navigationList,
        toggleAlert: false
      }
      return {
        state
      }
    },
    methods: {
      handleToggleAlert() {
        this.state.toggleAlert = !this.state.toggleAlert
        setTimeout(() => {
          this.state.toggleAlert = false
        }, 1000)
      }
    },
    onMounted() {
      console.log('onMounted')
    },
    onUpdated() {
      console.log('onUpdated')
    },
    onUnmounted() {
      console.log('onUnmounted')
    },
  }
</script>