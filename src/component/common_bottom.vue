<template>
  <v-bottom-nav :active.sync="activeBtn" :value="showNav" absolute color="transparent">
    <v-btn flat color="primary">
      <span>首页</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn flat color="primary">
      <span>课程</span>
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn flat color="primary">
      <span>商机</span>
      <v-icon>place</v-icon>
    </v-btn>

    <v-btn flat color="primary">
      <span>我的</span>
      <v-icon>perm_identity</v-icon>
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

<style lang="scss" scoped>
</style>