import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import Cookies from 'js-cookie'
import 'nprogress/nprogress.css'


NProgress.configure({
    showSpinner: false
}) // NProgress Configuration

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


    // Vue.$vux.loading.show({
    //     text: '正在获取授权信息'
    // });
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})