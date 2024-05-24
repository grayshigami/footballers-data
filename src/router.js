import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/forwards',
            name: 'forwards',
            component: () => import("@/components/forwards.vue")
        },
        {
            path: '/',
            redirect: 'forwards'
        },
        {
            path: '/midfielders',
            name: 'midfielders',
            component: () => import("@/components/midfielders.vue")
        },
        {
            path: '/defenders',
            name: 'defenders',
            component: () => import("@/components/defenders.vue")
        },
        {
            path: '/goalkeepers',
            name: 'goalkeepers',
            component: () => import("@/components/goalkeepers.vue")
        }
    ]
});

export default router
