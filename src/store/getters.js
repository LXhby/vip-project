const getters = {
    userInfo: state => state.user.userInfo,
    token: state => state.user.token,
    id: state => state.user.userInfo.id,
    config_id: state => state.user.userInfo.config_id,
    openid: state => state.user.userInfo.openid,
    subscribe_at: state => state.user.userInfo.subscribe_at,
}
export default getters