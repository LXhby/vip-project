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
// 我的学友
export function getClassmates(id, page) {
    return request({
        url: 'users',
        method: 'get',
        params: {
            "UserSearch[from_user_id]": id,
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
/**获取开户的银行 */
export function getBank() {
    return request({
        url: 'config/params?key=bank_icons',
        method: 'get',
    })
}
/**查看是否有该订单 */
export function checkForumOrder(data) {
    return request({
        url: 'forum-orders/' + data.forum_orderid,
        method: 'get',
        params: {
            user_id: data.user_id,
        }

    })
}
/**根据课程id查找 bundle_id*/
/**根据课程id获取信息 */
export function getbundle_id(id) {
    return request({
        url: 'forums/' + id,
        method: 'get'
    })
}
/**签到会议 */
export function putForumorder(id, info) {
    return request({
        url: 'forum-orders/' + id,
        method: 'put',
        data: {
            is_signed_in: info
        }
    })
}
/**查看是否有银行卡 */
export function checkBank(id) {
    return request({
        url: 'accounts',
        method: 'get',
        params: {
            'AccountSearch[user_id]': id
        }
    })
}
/**添加银行卡 */
export function addBank(data) {
    return request({
        url: 'accounts',
        method: 'post',
        data: data
    })
}