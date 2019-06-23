<template>
  <div>
    <div class="server-rules">
      <div class="padding-20">
        <member-detail></member-detail>
      </div>
      <div class="rules-info">
        <page-title title="服务条款"></page-title>

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
        <div style="height:56px;"></div>
      </div>

      <common-bottom></common-bottom>
    </div>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
import { getServeterms } from "@/api/member";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    PageTitle
  },
  data() {
    return {
      rules: ""
    };
  },
  created() {
    getServeterms().then(res => {
      this.rules = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.server-rules {
  .rules-info {
    padding: 0 20px;
    .rules-content {
      padding: 0px 34px;
      p {
        padding-bottom: 30px;
        font-size: 24px;
        color: rgb(102, 102, 102);
      }
    }
  }
}
</style>