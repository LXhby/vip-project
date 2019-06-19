<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="title">
        <p></p>
        <span>会员服务</span>
      </div>
      <div class="medium">
        <v-list v-for="(ele, index) in elements" :key="index">
          <router-link :to="router">
            <v-list-tile-content @click="pageChange(ele.id)">
              <v-list-tile-avatar class="avatar">
                <div class="icon-top">
                  <v-icon>{{ ele.icon }}</v-icon>
                </div>
              </v-list-tile-avatar>
              <v-list-tile-sub-title v-html="ele.title"></v-list-tile-sub-title>
            </v-list-tile-content>
          </router-link>
        </v-list>
      </div>
      <v-container fluid>
        <v-list>
          <router-link :to="router">
            <template v-for="(item, i) in items">
              <v-divider v-if="item.divider" :key="i"></v-divider>
              <v-list-tile v-else :key="item.title" @click="pageChange(item.id)">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title class="title-list">{{ item.title }}</v-list-tile-title>
                <v-list-tile-action v-if="item.badge">
                  <v-badge color="red">
                    <template v-slot:badge>
                      <span>5</span>
                    </template>
                  </v-badge>
                </v-list-tile-action>
                <v-list-tile-action class="icon-right">
                  <v-icon>chevron_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </router-link>
        </v-list>
      </v-container>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";

export default {
  components: {
    MemberDetail,
    CommonBottom
  },
  data() {
    return {
      router: {}, // 跳转route
      width: 300,
      elements: [
        { id: 1, icon: "contact_mail", title: "我的资料" },
        { id: 2, icon: "contact_mail", title: "课程预告" },
        { id: 3, icon: "contact_mail", title: "上课记录" },
        { id: 4, icon: "contact_mail", title: "会议签到" }
      ],
      items: [
        { id: 5, icon: "inbox", title: "我的学友" },
        { divider: true },
        { id: 6, icon: "star", title: "我的奖金" },
        { divider: true },
        { id: 7, icon: "send", title: "提现申请" },
        { divider: true },
        { id: 8, icon: "drafts", title: "我的消息", badge: true },
        { divider: true },
        { id: 9, icon: "mail", title: "服务条款" },
        { divider: true },
        { icon: "delete", title: "客服电话" },
        { divider: true }
      ]
    };
  },
  methods: {
    pageChange(id) {
      switch (id) {
        case 1:
          this.router = { path: "/mycard" };
          break;
        case 2:
          this.router = { path: "/servercenter" };
          break;
        case 3:
          this.router = { path: "/classrecord" };
          break;
        case 4:
          this.router = { path: "/signin" };
          break;
        case 5:
          this.router = { path: "/myclassmates" };
          break;
        case 6:
          this.router = { path: "/mycard" };
          break;
        case 7:
          this.router = { path: "/rewardout" };
          break;
        case 8:
          this.router = { path: "/newscenter" };
          break;
        case 9:
          this.router = { path: "/serverrules" };
          break;
        default:
          this.router = {};
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.main {
  padding: 40px 0;
  margin-bottom: 80px;
  .title {
    display: flex;
    align-items: center;
    p {
      margin-right: 14px;
      width: 8px;
      height: 30px;
      border-radius: 4px;
      background-color: $bg-color;
    }
    span {
      color: $text-gray-color;
      font-size: 30px;
    }
  }
  .medium {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding: 0 30px;
    .avatar {
      padding: 15px;
      .icon-top {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: $bg-yellow;
      }
    }
  }
  .fluid {
    padding: 0;
    .title-list {
      width: 320px;
      margin-right: 20px;
      color: $text-gray-color;
    }
    .icon-right {
      width: 100%;
    }
  }
}
</style>