import request from "@/utils/request";
/**商圈 */
export function getPost(id) {
    return request({
        url: "posts",
        method: "get",
        params: {
            "PostSearch[user_id]": id,
            expand: "member,post-like,member.user"
        }
    })
}
/**发表说说 */
export function publishWechat(data) {
    return request({
        url: 'posts',
        method: 'post',
        data: data
    })
}
/**删除说说 */
export function deletChat(id) {
    return request({
        url: 'posts/' + id,
        method: 'delete'
    })
}
/**点赞 */
export function handleLike(data) {
    return request({
        url: 'post-likes',
        method: 'post',
        data: data
    })
}