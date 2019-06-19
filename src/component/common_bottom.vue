<template>
  <v-bottom-nav :fixed="true" :active.sync="activeBtn" :value="showNav" class="bottom-tab">
    <router-link :to="{path: '/buyer'}">
      <v-btn flat color="primary">
        <span>首页</span>
        <v-icon>fas fa-home</v-icon>
      </v-btn>
    </router-link>
    <router-link :to="{path: '/servercenter'}">
      <v-btn flat color="primary">
        <span>课程</span>
        <i
          class="iconfont icon-wodebaobiao2"
          style="font-size:24px;line-height:24px;margin-bottom:4px;"
        ></i>
      </v-btn>
    </router-link>
    <router-link :to="{path: '/business'}">
      <v-btn flat color="primary">
        <span>商机</span>
        <i
          class="iconfont icon-quanziguanli"
          style="font-size:24px;line-height:24px;margin-bottom:4px;"
        ></i>
      </v-btn>
    </router-link>
    <router-link :to="{path: '/vipcenter'}">
      <v-btn flat color="primary">
        <span>我的</span>
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </router-link>
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
</style>