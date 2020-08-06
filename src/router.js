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
        },
        {
            name: 'User',
          path: '/user/:id',
            component: () => import('./Views/User.vue'),
            props:true
        }
    ]
})