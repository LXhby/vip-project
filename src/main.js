import 'babel-polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()



import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import VueWechatTitle from 'vue-wechat-title'
import {
  wx
} from "./utils/wx";


Vue.prototype.$wechat = wx;

import FastClick from 'fastclick'
//import VueTimeago from 'vue-timeago'
import Clipboard from 'v-clipboard'
Vue.use(Clipboard)
// Vue.use(VueTimeago)
FastClick.attach(document.body)

const history = window.sessionStorage
history.clear()

const DEBUG = (process.env.NODE_ENV == 'development');



Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/style/index.scss'
import 'lib-flexible'
Vue.use(Vuetify, {
  theme: {
    primary: '#ff4101',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    indigo: '#ffcd9e',
    dark: '#ff4101',
  },
  options: {
    customProperties: true
  }
})
import NProgress from 'nprogress' // progress bar
import Cookies from 'js-cookie'
import 'nprogress/nprogress.css'


NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
let hostname = window.location.hostname
hostname = hostname.substring(hostname.indexOf('.'))
router.beforeEach(async (to, from, next) => {



  NProgress.start()
  store.commit('app/setTitle', to.meta.title)
  if (!to.meta.auth || to.meta.auth === false) {
    next();
    return;
  }
  if (!Cookies.get('_identity-user')) {
    Cookies.remove('_identity-user');
  }


  let redirectUrl = 'http://' + location.hostname + '/?#' + to.fullPath;
  console.log("redirectUrl", redirectUrl)
  let redirect_uri = encodeURIComponent('http://api.xchmm.yiidev.cn/v1' + '/' + 'oauth/login?time=' + ((new Date()).getTime()) + '&redirectUrl=' + encodeURIComponent("http://localhost:8080/"));
  //let appid = DEBUG ? 'wx3429cc2f190f5d7f' : 'wx05695b38b4cd595e';
  let appid = DEBUG ? 'wxff02baa5a59ff067' : 'wx05695b38b4cd595e';
  // let appid = DEBUG ? 'wxff02baa5a59ff067' :'wx05695b38b4cd595e';
  let authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' +
    redirect_uri + '&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect';
  console.log("redirect_uri", redirect_uri);

  // window.location.href = authUrl;

})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
Vue.use(VueWechatTitle)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')