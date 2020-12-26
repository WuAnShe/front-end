import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import ButtonContent from './views/ButtonContent'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/button/:memberId',
        name: 'button',
        props: true,
        component: ButtonContent,
    }]
})
export default router