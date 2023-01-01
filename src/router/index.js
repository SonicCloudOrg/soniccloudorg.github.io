import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/home',
        component: () =>
            import ("../components/Home.vue"),
    },
    {
        path: '/document',
        component: () =>
            import ("../components/Document.vue"),
    },
    {
        path: '/deploy',
        component: () =>
            import ("../components/Deploy.vue"),
    },
    {
        path: '/contribute',
        component: () =>
            import ("../components/Contribute.vue"),
    },
    {
        path: '/sib',
        component: () =>
            import ("../components/SIB.vue"),
    },
    {
        path: '/saa',
        component: () =>
            import ("../components/SAA.vue"),
    },
    {
        path: '/sch',
        component: () =>
            import ("../components/SCH.vue"),
    },
    {
        path: '/sgm',
        component: () =>
            import ("../components/SGM.vue"),
    },
     {
        path: '/siwa',
        component: () =>
            import ("../components/SIWA.vue"),
    },
    {
        path: '/sdc',
        component: () =>
            import ("../components/SDC.vue"),
    },
    {
        path: '/version',
        component: () =>
            import ("../components/Version.vue"),
    },
    {
        path: '/about',
        component: () =>
            import ("../components/About.vue"),
    },
    {
        path: '/cabinet',
        component: () =>
            import ("../components/Cabinet.vue"),
    },
    {
        path: '/',
        redirect: '/home',
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
