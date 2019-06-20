<template>
  <div class="padding-20 my-reward-page">
    <member-detail></member-detail>
    <div class="main">
      <page-title title="我的奖金"></page-title>
      <div class="mony-list">
        <template v-for="(item) in list">
          <div class="list-item clearfix">
            <div class="money">
              <div class="num">
                <i class="iconfont icon-qian"></i>
                <span>10000.00元</span>
              </div>
              <div>
                <span>
                  推荐第
                  <i>10</i>个会员奖金
                </span>
              </div>
            </div>
            <div class="time">
              <span class="peo">入会人：王晓文(所报课程名字)</span>
              <span class="time-num">2019.4.24 18:23</span>
            </div>
          </div>
          <v-divider></v-divider>
        </template>
      </div>
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
      list: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.my-reward-page {
  .mony-list {
    margin-top: -20px;
    padding: 0 15px;
    margin-bottom: 40px;
  }
  .list-item {
    padding: 20px 0;
  }
  .money {
    width: 100%;
    color: $text-gray-color;
    font-size: 28px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .num {
      margin-left: 10px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    .peo {
      margin-left: 44px;
    }
    .time-num {
      margin-left: 30px;
      min-width: 230px;
      text-align: right;
    }
  }
}
</style>
