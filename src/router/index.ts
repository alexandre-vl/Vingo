import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/home',
            },
            {
                path: 'home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: 'filters',
                component: () => import('@/views/Filters.vue')
            },
            {
                path: 'notifications',
                component: () => import('@/views/Notif.vue')
            },
            {
                path: 'profil',
                component: () => import('@/views/Profil.vue')
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
