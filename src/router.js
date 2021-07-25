import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let routes=[
    {
        path: '/',
        component: () => import(/* webpackChunkName: "all-movies" */"@/layouts/mainLayout/WelcomePage")
    },
    {
        path: '/profile',
        component: () => import(/* webpackChunkName: "all-movies" */"@/layouts/nutritionalProfileLayout/NutritionalProfileLayout")
    }
];

export default new VueRouter({routes});