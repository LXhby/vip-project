<template>
  <div>
    <div class="server-rules">
      <div class="padding-20">
        <member-detail></member-detail>
      </div>
      <div class="rules-info">
        <div class="rules-title">
          <p></p>
          <span>服务条款</span>
        </div>
        <div class="rules-content">
          <p>
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
          </p>
          <p>
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
          </p>
          <p>
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
          </p>
          <p>
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
          </p>
          <p>
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
          </p>
        </div>
        <div class="bottom-tip">-- 我是有底线的 --</div>
      </div>
      <common-bottom></common-bottom>
    </div>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
export default {
  components: {
    MemberDetail,
    CommonBottom
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.server-rules {
  margin-bottom: 80px;
  .rules-info {
    padding: 20px;
    .rules-title {
      display: flex;
      align-items: center;
      p {
        margin-top: 10px;
        margin-right: 14px;
        width: 8px;
        height: 30px;
        border-radius: 4px;
        background-color: $bg-color;
      }
      span {
        color: $text-gray-color;
        font-size: 32px;
      }
    }
    .rules-content {
      padding: 30px 34px 0px 34px;
      p {
        padding-bottom: 30px;
        font-size: 24px;
        color: rgb(102, 102, 102);
      }
    }
  }
}
</style>