import Vue from 'vue'
import Router from 'vue-router'
import Register from '../views/entrance/register.vue'
import Introduce from '../views/entrance/introduce'
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Register',
            component: Register,
            meta: {
                title: '注册会员',
                auth: false
            }
        },
        {
            path: '/introduce',
            name: 'Introduce',
            component: Introduce,
        },
    ]
})