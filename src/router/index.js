import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminTemplate from '../views/templates/AdminTemplate.vue'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: AdminTemplate,
            children: [
                {
                    path: '/',
                    component: Home,
                },
                {
                    path: '/articles',
                    component: Articles,
                }
            ]
        }
    ]
})

export default router