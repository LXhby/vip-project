import Vue from 'vue'
import Router from 'vue-router'
import Register from '../views/entrance/register.vue'
import Introduce from '../views/entrance/introduce'
import Buyer from '../views/entrance/buyer'
import Success from '../views/enrollment/success'
import Authentication from '../views/enrollment/authentication'
import Infoprefect from '../views/enrollment/infoprefect'
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
            meta: {
                title: '学创会会员介绍',
                auth: false
            }
        },
        {
            path: '/buyer',
            name: 'Buyer',
            component: Buyer,
            meta: {
                title: '学习型中国会员介绍',
                auth: false
            }
        },
        {
            path: '/success',
            name: 'Success',
            component: Success,
            meta: {
                title: '欢迎加入学创会',
                auth: false
            }
        },
        {
            path: '/authentication',
            name: 'Authentication',
            component: Authentication,
            meta: {
                title: '会员实名认证',
                auth: false
            }
        },
        {
            path: '/infoprefect',
            name: 'Infoprefect',
            component: Infoprefect,
            meta: {
                title: '企业信息完善',
                auth: false
            }
        }
    ]
})