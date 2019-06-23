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


Vue.prototype.baseUrl = 'http://api.xchmm.yiidev.cn'
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/style/index.scss'
import 'lib-flexible'
import Cookies from 'js-cookie'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
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
import "./permission"


Vue.use(VueWechatTitle)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')