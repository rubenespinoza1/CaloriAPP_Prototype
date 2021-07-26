import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */'./layouts/mainLayout/WelcomePage.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */'./layouts/nutritionalProfileLayout/NutritionalProfileLayout.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register"*/'./layouts/mainLayout/RegisterUser.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login"*/'./layouts/mainLayout/LoginUser.vue')
    },
    {
        path: '/ingresar-alimento',
        name: 'ingresar-alimento',
        component: () => import(/* webpackChunkName: 'ingresar-alimento' */'./layouts/mainLayout/IngresarAlimento.vue')
    },
    {
        path: '/grafica-historica',
        name: 'grafica-historica',
        component: () => import(/* webpackChunkName: 'grafica-historica' */'./layouts/historyGraph/HistoryGraphLayout.vue')
    },
    {
        path: '*',
        name: 'not-found',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router