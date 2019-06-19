<template>
  <div class="padding-20 my-reward-page">
    <member-detail></member-detail>
    <div class="main">
      <page-title title="我的奖金"></page-title>
      <v-list two-line>
        <template v-for="(item) in list">
          <v-list-tile>
            <v-list-tile-content>
              <div class="money">
                <div class="fl num">
                  <i class="iconfont icon-qian"></i>
                  <span>10000.00元</span>
                </div>
                <div class="fr">
                  <span>
                    推荐第
                    <i>10</i>个会员奖金
                  </span>
                </div>
              </div>
              <div class="time">
                <p class="fl">入会人：王晓文(所报课程名字)</p>
                <p class="fr">2019.4.24 18:23</p>
              </div>
              <!-- <v-layout class="list-detail" row justify-space-between align-center>
                <v-flex xs6>
                  <div class="money">
                    <i class="iconfont icon-qian"></i>
                    <span>10000.00元</span>
                    <p>入会人：王晓文(所报课程名字)</p>
                  </div>
                </v-flex>
                <v-flex xs6>
                  <div class="time">
                    <span>
                      推荐第
                      <i>10</i>个会员奖金
                    </span>
                    <p>2019.4.24 18:23</p>
                  </div>
                </v-flex>
              </v-layout>-->
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
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
      list: [1, 2, 3, 4]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.my-reward-page {
  .v-list {
    padding: 0px;
    margin-top: -28px;
  }
  .money {
    width: 100%;
    color: $text-gray-color;
    font-size: 28px;
    .num {
      color: $bg-color;
    }
    .iconfont {
      margin-right: 6px;
      color: rgb(255, 206, 44);
    }
    i {
      font-style: normal;
      color: $bg-color;
    }
  }
  .time {
    width: 100%;
    color: $text-gray-color;
    font-size: 24px;
  }
}
</style>