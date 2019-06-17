<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="title">
        <p></p>
        <span>提现申请</span>
      </div>
      
    </div>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
export default {
  components: {
    MemberDetail
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.main {
  .title {
    display: flex;
    align-items: center;
    padding: 30px 0 0 0;
    p {
      margin-right: 14px;
      width: 8px;
      height: 30px;
      border-radius: 4px;
      background-color: $bg-color;
    }
    span {
      color: rgb(183, 183, 183);
      font-size: 30px;
    }
  }
}
</style>