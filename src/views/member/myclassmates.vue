<template>
  <div class="padding-20 my-classmate-page">
    <member-detail></member-detail>
    <div class="main">
      <page-title title="我的学友"></page-title>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile avatar>
            <v-list-tile-avatar class="item-avatar">
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
                <span class="recoment">推荐人：王勇</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
      <div class="bottom-tip">-- 我是有底线的 --</div>
      <div style="height:56px;"></div>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    PageTitle
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.my-classmate-page {
  .main {
    .v-list {
      padding: 0px;
      margin-top: -28px;
    }
    .item-avatar {
      position: relative;
      img {
        width: 80px;
        height: 80px;
      }
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
      height: 26px;
      font-size: 24px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.54);
    }
    .v-list__tile__content {
      margin-left: 20px;
      font-size: 24px;
    }
    .v-list__tile__sub-title {
      p {
        font-size: 24px;
      }
      span {
        margin-right: 30px;
        font-size: 20px;
      }
      .recoment {
        margin-right: 0px;
      }
    }
  }
}
</style>
<style lang="scss">
.my-classmate-page {
  .v-list {
    .v-list__tile {
      height: 136px !important;
    }
  }
}
</style>
