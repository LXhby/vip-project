<template>
  <div class="padding-20 my-reward-page">
    <member-detail></member-detail>
    <div class="main">
      <v-list two-line>
        <template v-for="(item) in list">
          <v-list-tile>
            <v-list-tile-content>
              <v-layout class="list-detail" row justify-space-between align-center>
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
              </v-layout>
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
      list: [1, 2, 3, 4]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.my-reward-page {
  .list-detail {
    width: 100%;
    color: rgba(102, 102, 102, 0.6);
    .money {
      .iconfont {
        margin-right: 6px;
        color: rgb(255, 206, 44);
      }
      span {
        color: $bg-color;
        font-size: 26px;
      }
      p {
        margin-top: 6px;
        margin-left: 31.25px;
        font-size: 18.75px;
      }
    }
    .time {
      height: 100%;
      text-align: right;
      font-size: 21.875px;
      i {
        font-style: normal;
        color: $bg-color;
      }
      p {
        margin-top: 6px;
        font-size: 18.75px;
      }
    }
  }
}
</style>