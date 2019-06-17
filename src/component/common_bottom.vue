<template>
  <v-bottom-nav :fixed="true" :active.sync="activeBtn" :value="showNav" class="bottom-tab">
    <v-btn flat color="primary">
      <span>首页</span>
      <v-icon>fas fa-home</v-icon>
    </v-btn>

    <v-btn flat color="primary">
      <span>课程</span>
      <i class="iconfont icon-wodebaobiao2"></i>
    </v-btn>

    <v-btn flat color="primary">
      <span>商机</span>
      <i class="iconfont icon-quanziguanli"></i>
    </v-btn>

    <v-btn flat color="primary">
      <span>我的</span>
      <v-icon>fas fa-user</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>
<script>
export default {
  data() {
    return {
      activeBtn: 1,
      showNav: true
    };
  }
};
</script>
<style>
.bottom-tab {
  background-color: #fff !important;
}
</style>
<style lang="scss" scoped>
.iconfont {
  font-size: 38px;
  margin-bottom: 6.25px;
  line-height: 38px;
}
</style>