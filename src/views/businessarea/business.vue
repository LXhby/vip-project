<template>
  <div>
    <div class="padding-20">
      <user-detail></user-detail>
    </div>
  </div>
</template>

<script>
import UserDetail from "@/component/user_detail";
export default {
  components: {
    UserDetail
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

</style>