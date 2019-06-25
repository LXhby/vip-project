import request from "@/utils/request";
/**商圈 */
export function getPost(id) {
    return request({
        url: "posts",
        method: "get",
        params: {
            "PostSearch[user_id]": id,
            expand: "member, member.user"
        }
    })
}