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
export function activateVip(id, data) {
    return request({
        url: 'users/' + id,
        method: 'put',
        data: data
    })
}
/**验证有没有订单 */
export function checkmemberorders(id) {
    return request({
        url: 'member-orders',
        method: 'get',
        params: {
            'MemberOrderSearch[user_id]': id
        }
    })
}

/**会员介绍--订单轮播 */
export function getmember_order() {
    return request({
        url: 'member-orders?expand=member,membership',
        method: 'get'
    })
}

/**获取会员产品信息 */
export function getProdInfo() {
    return request({
        url: 'memberships',
        method: 'get',
        params: {
            'MembershipSearch[is_default]': 1,
            'per-page': 1
        }
    })
}

/**点击激活会员添加订单 */
export function addOrder(data) {
    return request({
        url: 'member-orders',
        method: 'post',
        data: data
    })
}
/**获取会员产品信息 */
export function ProdById(id) {
    return request({
        url: 'memberships/' + id,
        method: 'get',
    })
}
/** 会员产品介绍购买---*/
export function prodintroduce() {

}