import request from "@/utils/request";

/**微信授权链接 */
export function oauth(data) {
    return request({
        url: "oauth/get-redirect-url",
        method: "get",
        params: {
            redirectUrl: data
        }
    });
}
/**获取用户信息 */
export function oauthUser() {
    return request({
        url: "oauth/get-current-user",
        method: "get"
    });
}
/**获取验证码 */
export function getCode(data) {
    return request({
        url: 'sms/',
        method: 'post',
        data: data
    })
}
/**注册会员 */
export function activateVip(data) {
    return request({
        url: 'members',
        method: 'post',
        data: data
    })
}