<template>
  <div>
    <div class="padding-20">
      <user-detail></user-detail>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import UserDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
export default {
  components: {
    UserDetail,
    CommonBottom
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

</style>