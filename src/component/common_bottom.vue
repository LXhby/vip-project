<template>
  <v-bottom-nav :fixed="true" :active.sync="activeBtn" :value="true" class="bottom-tab">
    <router-link :to="{path: '/buyer'}">
      <v-btn flat color="primary" value="home">
        <span>首页</span>
        <v-icon>fas fa-home</v-icon>
      </v-btn>
    </router-link>
    <router-link :to="{path: '/servercenter'}">
      <v-btn flat color="primary" value="class">
        <span>课程</span>
        <i
          class="iconfont icon-wodebaobiao2"
          style="font-size:24px;line-height:24px;margin-bottom:4px;"
        ></i>
      </v-btn>
    </router-link>
    <router-link :to="{path: '/business'}">
      <v-btn flat color="primary" value="business">
        <span>商圈</span>
        <i
          class="iconfont icon-quanziguanli"
          style="font-size:24px;line-height:24px;margin-bottom:4px;"
        ></i>
      </v-btn>
    </router-link>
    <router-link :to="{path: '/vipcenter'}">
      <v-btn flat color="primary" value="my">
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
      activeBtn: "home",
      showNav: true
    };
  },
  created() {
    var name = this.$route.name;
    if (name == "Buyer") {
      this.activeBtn = "home";
    }
    if (name == "ServerCenter") {
      this.activeBtn = "class";
    }
    if (name == "Business") {
      this.activeBtn = "business";
    }
    if (name == "Vipcenter") {
      this.activeBtn = "my";
    }
    if (name == "Myreward") {
      this.activeBtn = "my";
    }
    if (name == "Serverrules") {
      this.activeBtn = "my";
    }
    if (name == "Newscenter") {
      this.activeBtn = "my";
    }
    if (name == "Rewardout") {
      this.activeBtn = "my";
    }
    console.log("this.$router", this.$route);
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