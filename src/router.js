import Router from 'vue-router'

import HomePage from './pages/index.vue'
import About from './pages/about.vue'
import BaseLayout from './components/base-layout.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/base-layout', component: BaseLayout }
]

const router = new Router ({
  routes // short for `routes: routes`
})

export default router