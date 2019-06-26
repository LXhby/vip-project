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
                <span>{{item.amount}}</span>
              </div>
              <div>
                <span>{{item.status}}</span>
                <!-- <span>
                  推荐第
                  <i>10</i>个会员奖金
                </span>-->
              </div>
            </div>
            <div class="time">
              <span class="peo">{{item.remark}}</span>
              <span class="time-num">{{item.updated_at | convertTime('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
          </div>
          <v-divider></v-divider>
        </template>
      </div>
      <infinite-loading ref="infiniteLoading" @infinite="infiniteHandler" spinner="spiral">
        <span slot="no-more">
          <div class="bottom-tip">-- 我是有底线的 --</div>
        </span>
      </infinite-loading>
      <div style="height:56px;"></div>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
import { mapGetters } from "vuex";
import { getMyReward } from "@/api/member";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    PageTitle,
    InfiniteLoading
  },
  computed: {
    ...mapGetters(["id", "memberInfo"])
  },
  data() {
    return {
      list: [],
      page: 1
    };
  },
  created() {},
  methods: {
    infiniteHandler($state) {
      this.fetchPage($state);
    },
    fetchPage($state) {
      getMyReward(this.id).then(response => {
        this.list = response.data.items;
        if ($state) {
          if (response.data._meta.pageCount > 0) {
            $state.loaded();
          }
          if (
            response.data._meta.currentPage >= response.data._meta.pageCount
          ) {
            $state.complete();
          }
        }
        this.page++;
      });
    }
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
