import Vue from 'vue'
import VueRouter from 'vue-router'
import CompositionApi from '@vue/composition-api';
Vue.config.productionTip = false
import vuetify from '@/plugins/vuetify'

import router from './router'
import './styles/index.css'


Vue.use(CompositionApi);
Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  render: h => h('router-view')
}).$mount('#app')
