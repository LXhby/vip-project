const state = {
    userInfo: {
        id: 6,
        access_token: '69fde8eb10c3cf4d7442d09c5b7359ea',
        openid: 'ou12Jt24UjMA7pA5bVZ4uB-Jjapw',
        nickname: '王勇🇨🇳',
        realname: '撒飞洒发',
        company: 'asdfasdf',
        post: '萨芬',
        config_id: 1,
        subscribe_at: '2018-04-30 18:09:46',
        headimgurl: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKNpepsCnC60XfmFpotyNhkh9YFdjeBxvHsngCw3J7NeyrJgmFaWQSdK914oBsNibiccRdgoU2Unc6Q/132',
        mobile: '13233332222',
        balance: '5203.00'
    },
    memberInfo: null,
    token: '83bfd0b6f59f8506fff0096d5336d57b'
}

const mutations = {
    setUserInfo: (state, info) => {
        state.userInfo = info
    },
    setToken: (state, token) => {
        state.token = token
    },
    setmemberInfo: (state, info) => {
        state.memberInfo = info;
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}