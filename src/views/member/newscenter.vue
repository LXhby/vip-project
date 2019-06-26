<template>
  <div class="news-center-page padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="news-list">
        <div class="news-head">
          <div class="news-title">
            <p></p>
            <span>消息中心</span>
          </div>
          <div class="news-select">
            <v-btn flat small @click.native="sheet = true">
              <v-icon class="nav-btn">fas fa-bars</v-icon>筛选
            </v-btn>
          </div>
        </div>
        <div class="news-nav" v-for="(arr,index) in list" :key="index">
          <div class="clearfix">
            <h4 class="fl">【{{arr.type | converType}}】</h4>
            <span class="fr">{{arr.send_at}}</span>
          </div>
          <p>{{arr.myNews.first.value +','+arr.myNews.remark.value}}</p>
        </div>
      </div>
    </div>
    <infinite-loading ref="infiniteLoading" @infinite="infiniteHandler" spinner="spiral">
      <span slot="no-more">
        <div class="bottom-tip">-- 我是有底线的 --</div>
      </span>
    </infinite-loading>
    <div style="height:57px;"></div>
    <common-bottom></common-bottom>
    <v-bottom-sheet v-model="sheet">
      <v-list class="bottom-list-news">
        <v-list-tile-title
          v-for="(item,index) in items"
          :key="index"
          @click="handleType(item.value)"
        >{{ item.title }}</v-list-tile-title>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import { newsCenter } from "@/api/member.js";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    InfiniteLoading
  },
  data() {
    return {
      page: 1,
      list: [],
      items: [
        { title: "报名通知", value: "course.order.create" },
        { title: "收益通知", value: "balance.repay.notify" }
      ],
      sheet: false,
      type: null
    };
  },
  created() {},
  filters: {
    converType(value) {
      if (value == "course.order.create") {
        return "报名通知";
      }
      if (value == "balance.repay.notify") {
        return "收益通知";
      }
    }
  },
  methods: {
    infiniteHandler($state) {
      this.fetchPage($state);
    },
    fetchPage($state) {
      const info = {
        type: this.type,
        page: this.page
      };
      newsCenter(info).then(response => {
        response.data.items.forEach(element => {
          this.$set(element, "myNews", element.data.data);
          this.list.push(element);
        });
        console.log("this.list", this.list);
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
    },
    handleType(type) {
      this.page = 1;
      this.type = type;
      this.list = [];
      this.fetchPage();
      this.sheet = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.news-center-page {
  .main {
    margin-bottom: 40px;
    .news-list {
      .news-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 35px 0;
        .news-title {
          display: flex;
          align-items: center;
          p {
            margin-left: 8px;
            margin-right: 10px;
            width: 8px;
            height: 30px;
            border-radius: 4px;
            background-color: $bg-color;
          }
          span {
            color: $text-gray-color;
            font-size: 32px;
            line-height: 30px;
          }
        }
      }
      .news-nav {
        h4 {
          font-size: 28px;
          margin-left: -12.5px;
          color: $bg-color;
          font-weight: normal;
        }
        span {
          color: #ccc;
          font-size: 24px;
        }
        p {
          margin-top: 10px;
        }
        margin-bottom: 34px;
        padding: 20px 40px;
        border: 1px solid rgb(221, 221, 221);
        font-size: 28px;
        color: rgb(102, 102, 102);
        background: rgb(244, 244, 244);
        border-radius: 8px;
      }
    }
  }
}
</style>
<style lang="scss">
@import "@/style/public.scss";
.news-center-page {
  .news-select {
    height: 30px;
    line-height: 30px;
    .v-btn {
      margin: 0px;
      padding: 0 8px;
      color: #999;
      font-size: 32px;
      height: 30px;
      font-weight: normal;
      .v-btn__content {
        height: 30px;
        line-height: 30px;
        justify-content: flex-end;
      }
      .v-icon {
        font-size: 32px;
        margin-right: 10px;
      }
    }
  }
}
.bottom-list-news {
  .v-list__tile__title {
    text-align: center;
    font-size: 32px;
    line-height: 36px;
    height: 56px;
    padding: 10px 0;
  }
}
</style>
