<template>
  <div class="padding-20 my-classmate-page">
    <member-detail></member-detail>
    <div class="main">
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile avatar>
            <v-list-tile-avatar size="51.2px" class>
              <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
              <i class="iconfont icon-renzhengdunpaianquanbaozhangzhibao"></i>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>
                <p>王晓文 CEO</p>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                <p>北京拓客云科技有限公司</p>
                <span>贡献奖金：119元</span>
                <span>贡献学友：119人</span>
                <span>推荐人：王勇</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
    </div>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
export default {
  components: {
    MemberDetail
  },
  data() {
    return {
      items: [1, 2, 3]
    };
  }
};
</script>

<style lang="scss" scoped>
.my-classmate-page {
  .main {
    .v-avatar {
      position: relative;
    }
    .iconfont {
      position: absolute;
      top: -18px;
      right: -4.71px;
      font-size: 31.25px;
      color: rgb(244, 234, 42);
    }
    .v-list__tile__avatar {
      margin-top: 0px;
      min-width: 52px;
    }
    .v-list__tile__title {
      color: rgba(0, 0, 0, 0.54);
    }
    .v-list__tile__content {
      margin-left: 20px;
      font-size: 22px;
    }
    .v-list__tile__sub-title {
      p {
        font-size: 22px;
      }
      span {
        margin-right: 30px;
        font-size: 18.75px;
      }
    }
  }
}
</style>