import Vue from 'vue'
import Router from 'vue-router'
// 入口
import Register from '../views/entrance/register.vue'
import Introduce from '../views/entrance/introduce'
import PayPage from '../views/entrance/paypage'
import Buyer from '../views/entrance/buyer'
// 入会
import Success from '../views/enrollment/success'
import Authentication from '../views/enrollment/authentication'
import Infoprefect from '../views/enrollment/infoprefect'
// 课程
import ServerCenter from '../views/course/servercenter'
import Courseinfo from '../views/course/courseinfo'
import Coursepay from '../views/course/coursePay'
// 商圈
import Business from '../views/businessarea/business'
// 会员中心
import Vipcenter from '../views/member/vipcenter'
import Mycard from '../views/member/mycard'
import Classrecord from '../views/member/classrecord'
import Signin from '../views/member/signin'
import Myclassmates from '../views/member/myclassmates'
import Myreward from '../views/member/myreward'
import Rewardout from '../views/member/rewardout'
import Newscenter from '../views/member/newscenter'
import Serverrules from '../views/member/serverrules'



Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'Register',
            component: Register,
            meta: {
                title: '注册会员',
                auth: true
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
            path: '/paypage',
            name: 'Pay',
            component: PayPage,
            meta: {
                title: '支付',

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
            path: '/success/:id',
            name: 'Success',
            component: Success
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
            path: '/infoprefect/:id',
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
            path: '/cousePay',
            name: 'cousePay',
            component: Coursepay,
            meta: {
                title: '支付',
            }
        },
        {
            path: '/courseinfo/:id/:bundle_id',
            name: 'Courseinfo',
            component: Courseinfo,
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
                title: '名片',
                auth: false
            }
        },
        {
            path: '/classrecord',
            name: 'Classrecord',
            component: Classrecord,
            meta: {
                title: '上课记录',
                auth: false
            }
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin,
            meta: {
                title: '会议签到确认',
                auth: false
            }
        },
        {
            path: '/myclassmates',
            name: 'Myclassmates',
            component: Myclassmates,
            meta: {
                title: '我的学友',
                auth: false
            }
        },
        {
            path: '/myreward',
            name: 'Myreward',
            component: Myreward,
            meta: {
                title: '我的奖金明细',
                auth: false
            }
        },
        {
            path: '/rewardout',
            name: 'Rewardout',
            component: Rewardout,
            meta: {
                title: '奖金提现申请',
                auth: false
            }
        },
        {
            path: '/newscenter',
            name: 'Newscenter',
            component: Newscenter,
            meta: {
                title: '消息服务中心',
                auth: false
            }
        },
        {
            path: '/serverrules',
            name: 'Serverrules',
            component: Serverrules,
            meta: {
                title: '服务条款',
                auth: false
            }
        }
    ]
})