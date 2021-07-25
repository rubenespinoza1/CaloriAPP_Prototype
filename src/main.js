import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from './router.js'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
