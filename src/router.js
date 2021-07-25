import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */'../src/layouts/MainLayout.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */'../src/layouts/nutritionalProfileLayout/NutritionalProfileLayout.vue'),
  },
  {
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:8080/',
  routes
})

export default router