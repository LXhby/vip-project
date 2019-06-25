import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // progress bar
import Cookies from "js-cookie";
import "nprogress/nprogress.css";
import Vue from 'vue'
import {
    oauth,
    oauthUser,
    weixin
} from "@/api/index.js";

NProgress.configure({
    showSpinner: false
}); // NProgress Configuration
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
router.beforeEach(async (to, from, next) => {
    NProgress.start();
    store.commit("app/setTitle", to.meta.title);

    // 微信网页授权
    if (!Cookies.get("_identity-user") && !store.state.user.userInfo) {
        window.localStorage.clear();
        // 第一次访问
        console.log("授权登录");
        // 跳转到微信授权页面，微信授权地址通过服务端获得
        var info = "http://" + location.hostname + ":8080" + to.fullPath;
        console.log("info", info);
        oauth(info).then(res => {
            if (res.status === 200) {
                window.location.href = res.data;
            }
        });
    } else if (!store.state.user.userInfo) {
        // 刷新页面，获取数据存入vuex
        oauthUser.then(res => {
            if (res.status === 200) {
                console.log("获取当前用户成功", res.data);
                store.commit("user/setUserInfo", {
                    userInfo: res.data
                });
                store.commit('user/setToken', res.data.access_token)
                Cookies.set('token', res.data.access_token)
                console.log("Cookies", Cookies)
                // next();
            }
        });
        console.log("cookie生效期内登录");
    } else {
        // 已经登录
        console.log("已登录");
        store.commit("app/updateLoadingStatus", {
            isLoading: true
        });

        const toIndex = history.getItem(to.path);
        const fromIndex = history.getItem(from.path);

        if (toIndex) {
            if (
                !fromIndex ||
                parseInt(toIndex, 10) > parseInt(fromIndex, 10) ||
                (toIndex === "0" && fromIndex === "0")
            ) {
                store.commit("app/updateDirection", {
                    direction: "forward"
                });
            } else {
                store.commit("app/updateDirection", {
                    direction: "reverse"
                });
            }
        } else {
            ++historyCount;
            history.setItem("count", historyCount);
            to.path !== "/" && history.setItem(to.path, historyCount);
            store.commit("app/updateDirection", {
                direction: "forward"
            });
        }

        document.title = to.meta.title;
        // // 处理jssdk签名,兼容history模式
        if (!store.state.app.url) {
            console.log(document.URL);
            store.commit("app/setUrl", document.URL);
        }

        if (/\/http/.test(to.path)) {
            let url = to.path.split("http")[1];
            window.location.href = `http${url}`;
        } else {
            NProgress.start();
            next();
        }
    }
});

router.afterEach(function (to) {
    store.commit('app/updateLoadingStatus', {
        isLoading: false
    })
    // finish progress bar
    NProgress.done();
    Vue.nextTick(() => {
        var url = ''
        // 判断是否是ios微信浏览器
        if (window.__wxjs_is_wkwebview === true) {
            console.log('__wxjs_is_wkwebview');
            if (store.state.app.url) {
                url = store.state.app.url.split('#')[0]
            } else {
                url = window.location.href.split('#')[0]
            }
        } else {
            console.log('is not wkwebview');
            url = window.location.href.split('#')[0]
        }
        console.log('wechat jssdk', url);

        weixin(url).then(response => {
            // js-sdk配置
            console.log('res', response)
            Vue.prototype.$wechat.config(response.data);
        })
        console.log(Vue.prototype)
        // Vue.prototype.$wechat.config({
        //     appid: 'wxff02baa5a59ff067',
        //     appsecret: '763f4552a9fef8823cef09add5f2427d',
        //     token: 'z5ZtRFYZ8sxprndn',
        //     encodingAesKey: 'pP5C0slTkqJwMh23EFcz3GeKPuovLxDi1ar0PE3uHhL',
        //     username: 'gh_3d133ce2f762',
        //     pay_mch_id: '1353927702',
        //     pay_key: 'AXGongRuiLingWangYongYangQingBin',
        //     apiclient_cert: 'wechat_1_apiclient_cert.pem',
        //     apiclient_key: 'wechat_1_apiclient_key.pem',
        //     created_at: '1442999403'
        // })
        // console.log("Vue", Vue.wechat)


    }, 1000)
});