import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/Home',
        component: () =>
            import ("../components/Home.vue"),
    },
    {
        path: '/Document',
        component: () =>
            import ("../components/Document.vue"),
    },
    {
        path: '/Deploy',
        component: () =>
            import ("../components/Deploy.vue"),
    },
    {
        path: '/Contribute',
        component: () =>
            import ("../components/Contribute.vue"),
    },
    {
        path: '/SIB',
        component: () =>
            import ("../components/SIB.vue"),
    },
    {
        path: '/SAA',
        component: () =>
            import ("../components/SAA.vue"),
    },
    {
        path: '/SCH',
        component: () =>
            import ("../components/SCH.vue"),
    },
    {
        path: '/SGM',
        component: () =>
            import ("../components/SGM.vue"),
    },
     {
        path: '/SIWA',
        component: () =>
            import ("../components/SIWA.vue"),
    },
    {
        path: '/SDC',
        component: () =>
            import ("../components/SDC.vue"),
    },
    {
        path: '/Version',
        component: () =>
            import ("../components/Version.vue"),
    },
    {
        path: '/About',
        component: () =>
            import ("../components/About.vue"),
    },
    {
        path: '/',
        redirect: '/Home',
    }
]

export default createRouter({
    history: createWebHashHistory("/sonic-cloud/"),
    routes,
})
