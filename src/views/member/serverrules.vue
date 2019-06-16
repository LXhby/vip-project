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
            后台设置服务条款后台设置服务条款后台设置服务条款
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
            后台设置服务条款后台设置服务条款后台设置服务条款
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
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
            后台设置服务条款后台设置服务条款后台设置服务条款
          </p>
        </div>
        <div class="bottom-tip">--我是有底线的--</div>
      </div>
    </div>

    <common-bottom></common-bottom>
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
        margin-right: 10px;
        width: 6px;
        height: 25px;
        border-radius: 3px;
        background-color: $bg-color;
      }
      span {
        color: gray;
        font-size: 30px;
      }
    }
    .rules-content {
      padding: 20px;
      p {
        padding: 20px 0;
        font-size: 20px;
      }
    }
    .bottom-tip {
      padding: 0 0 40px 0;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>