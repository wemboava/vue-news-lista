import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminTemplate from '../views/templates/AdminTemplate.vue'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Family from '../views/Family.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/articles'
        },
        {
            path: '/articles',
            component: AdminTemplate,
            children: [
                {
                    path: '/articles',
                    component: Home,
                },
                {
                    path: '/articles/:category',
                    component: Articles,
                },
                {
                    path: '/family',
                    component: Family,
                }
            ]
        }
    ]
})

export default router