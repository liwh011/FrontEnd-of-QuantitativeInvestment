import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/pages/Main'),
        },
        {
            path: '/login',
            name: 'HelloWorld',
            component: () => import('@/pages/Login'),
        },
        {
            path: '/account_book',
            name: 'AccountBook',
            component: () => import('@/pages/AccountBook'),
            meta: {
                needLogin: true,
            },
        },
        {
            path: '/account_book/:bookID',
            name: 'AccountBookDetail',
            component: () => import('@/pages/AccountBookDetail'),
            meta: {
                needLogin: true,
            },
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import('@/pages/NotFound'),
        },
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },

});
