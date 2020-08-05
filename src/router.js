import Vue from 'vue'
import Router from "vue-router";
import Home from '@/Views/Home'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/range-input',
            component: () => import('./Views/RangeInput.vue')
        },
        {
            path: '/crud',
            component: () => import('./Views/Crud.vue')
        }
    ]
})