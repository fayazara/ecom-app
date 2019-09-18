import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css';
import VueAgile from 'vue-agile'
Vue.config.productionTip = false
Vue.use(VueAgile)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
