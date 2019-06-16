import Vue from 'vue'
import Router from 'vue-router'
// 入口
import Register from '../views/entrance/register.vue'
import Introduce from '../views/entrance/introduce'
import Buyer from '../views/entrance/buyer'
// 入会
import Success from '../views/enrollment/success'
import Authentication from '../views/enrollment/authentication'
import Infoprefect from '../views/enrollment/infoprefect'
// 课程
import ServerCenter from '../views/course/servercenter'
import Courseinfo from '../views/course/courseinfo'
// 商圈
import Business from '../views/businessarea/business'
// 会员中心
import Vipcenter from '../views/member/vipcenter'
import Mycard from '../views/member/mycard'


Vue.use(Router);
export default new Router({
    routes: [{
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
        },
        {
            path: '/servercenter',
            name: 'ServerCenter',
            component: ServerCenter,
            meta: {
                title: '课程服务中心',
                auth: false
            }
        },
        {
            path: '/courseinfo',
            name: 'Courseinfo',
            component: Courseinfo,
            meta: {
                title: '某某课程名称',
                auth: false
            }
        },
        {
            path: '/business',
            name: 'Business',
            component: Business,
            meta: {
                title: '商圈服务中心',
                auth: false
            }
        },
        {
            path: '/vipcenter',
            name: 'Vipcenter',
            component: Vipcenter,
            meta: {
                title: '会员服务中心',
                auth: false
            }
        },
        {
            path: '/mycard',
            name: 'Mycard',
            component: Mycard,
            meta: {
                title: '王晓文的学创会会员名片',
                auth: false
            }
        },
    ]
})