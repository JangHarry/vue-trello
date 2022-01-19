import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import router from '../src/router/router'


Vue.config.productionTip = false;
Vue.prototype.$http = axios



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
