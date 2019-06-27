import request from "@/utils/request";
/**服务条款 */
export function getServeterms() {
    return request({
        url: 'config/get',
        params: {
            key: 'member_rights',
        },
        method: 'get'
    })
}
//检查是否实名认证
export function checkIsMember(id) {
    return request({
        url: 'members',
        method: 'get',
        params: {
            'MemberSearch[user_id]': id
        }
    })
}
// 我的名片
export function getCard(id) {
    return request({
        url: 'members/' + id,
        method: 'get'
    })
}

/**我的奖金 */
export function getMyReward(id, page) {
    return request({
        url: 'incomes',
        method: 'get',
        params: {
            'incomeSearch[user_id]': id,
            sort: '-updated_at',
            page: page,
            "per-page": 10
        }
    })
}
/**消息服务中心 */
export function newsCenter(data) {
    return request({
        url: 'wechat-notifications',
        method: 'get',
        params: {
            'WechatNotificationSearch[type]': data.type,
            page: data.page,
            "per-page": 10,
            sort: '-send_at'
        }
    })
}