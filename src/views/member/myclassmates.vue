<template>
  <div class="padding-20 my-classmate-page">
    <member-detail></member-detail>
    <div class="main">
      <page-title title="我的学友"></page-title>
      <v-list three-line>
        <template v-for="item in list">
          <v-list-tile avatar>
            <v-list-tile-avatar class="item-avatar">
              <img :src="item.headimgurl">
              <i class="iconfont icon-renzhengdunpaianquanbaozhangzhibao"></i>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <p>{{item.realname}} {{item.post}}</p>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                <p>{{item.company}}</p>
                <span>贡献奖金：119元</span>
                <span>贡献学友：{{list.length}}人</span>
                <span class="recoment">推荐人：{{userInfo.realname}}</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
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
import { mapGetters } from "vuex";
import { getClassmates } from "@/api/member";
import InfiniteLoading from "vue-infinite-loading";
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    PageTitle,
    InfiniteLoading
  },
  computed: {
    ...mapGetters(["id", "userInfo"])
  },
  data() {
    return {
      list: [],
      page: 1
    };
  },
  methods: {
    infiniteHandler($state) {
      this.fetchPage($state);
    },
    fetchPage($state) {
      getClassmates(this.id, this.page).then(response => {
        response.data.items.forEach(element => {
          this.list.push(element);
        });
        console.log(this.userInfo)
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
      // todoing
    }
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
