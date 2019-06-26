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
// 我的名片
export function getCard(id) {
    return request({
        url: 'members/' + id,
        method: 'get'
    })
}

/**我的奖金 */
export function getMyReward(id) {
    return request({
        url: 'incomes',
        method: 'get',
        params: {
            'incomeSearch[user_id]': id
        }
    })
}