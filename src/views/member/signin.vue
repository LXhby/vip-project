<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <div class="main">
      <page-title title="确认会议签到"></page-title>
      <div class="content">
        <div class="my-info">
          <p class="info-title">个人信息</p>
          <div class="info-list">
            <div>
              <p class="left">姓名</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{memberInfo.realname}}
              </p>
            </div>
            <div>
              <p class="left">身份证号</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{memberInfo.idsn}}
              </p>
            </div>
            <div>
              <p class="left">手机</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{memberInfo.mobile}}
              </p>
            </div>
            <div>
              <p class="left">公司名称</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{memberInfo.company}}
              </p>
            </div>
            <div>
              <p class="left">职务</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{memberInfo.post}}
              </p>
            </div>
          </div>
        </div>
        <div class="course-info">
          <p class="info-title">课程信息</p>
          <div class="course-info-list">
            <div>
              <p class="left">课程名称</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{forumInfo.name}}
              </p>
            </div>
            <div>
              <p class="left">开课时间</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{forumInfo.start_date | changeType}}-{{forumInfo.end_date | changeType}}
              </p>
            </div>
            <div>
              <p class="left">上课地点</p>
              <p class="user-info">
                <span class="maohao">:</span>
                {{forumInfo.address}}
              </p>
            </div>
            <div>
              <p class="left">已学次数</p>
              <!-- todoing -->
              <p class="user-info">
                <span class="maohao">:</span>这是您第
                <span>8</span> 次学习本课程 总学习
                <span>12</span> 次
              </p>
            </div>
            <div>
              <p class="left">推荐人</p>
              <p class="user-info">
                <span class="maohao">:</span>
                <span>王勇</span> 未报名/未签到/已签到
              </p>
            </div>
          </div>
        </div>
        <div class="confirm">
          <v-btn color="primary" round depressed @click="confirm" medium class="confirm-btn">确认签到</v-btn>
        </div>
      </div>
    </div>
    <v-snackbar v-model="show" :timeout="2000" color="success" top>签到成功</v-snackbar>
    <div style="height:57px;"></div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import moment from "moment";
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
import { checkForumOrder, getbundle_id, putForumorder } from "@/api/member";
import { mapGetters } from "vuex";
import { setTimeout } from "timers";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    PageTitle
  },
  filters: {
    changeType(value) {
      return moment(value).format("YYYY年MM月DD日");
    }
  },
  computed: {
    ...mapGetters(["id", "userInfo", "memberInfo"])
  },
  data() {
    return {
      forum_orderid: "",
      forumInfo: {},
      show: false
    };
  },
  created() {
    this.forum_orderid = this.$route.params.id;
    console.log("this.forum_id ", this.forum_id);
    //查询是否有订单,没有该订单并且没支付 去别的页面
    const info = {
      user_id: this.id,
      forum_orderid: this.forum_orderid
    };
    checkForumOrder(info).then(res => {
      const info = res.data;
      if (info.status != "未支付") {
        getbundle_id(info.forum_id).then(res => {
          this.forumInfo = res.data;
        });
      } else {
        getbundle_id(info.forum_id).then(res => {
          this.$router.push({
            name: "Courseinfo",
            params: { id: info.forum_id, bundle_id: res.data.bundle_id }
          });
        });
      }
    });
  },
  methods: {
    confirm() {
      putForumorder(this.forum_orderid, 1).then(res => {
        this.show = true;
        setTimeout(() => {
          this.$router.push({ name: "Buyer" });
        }, 2000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.main {
  margin-bottom: 90px;
  .content {
    padding: 12px 35px 0 35px;
    border: 2px solid $bg-color;
    border-radius: 10px;
    .info-title {
      padding: 20px 0;
      font-size: 30px;
      color: $bg-color;
      border-bottom: 2px solid whitesmoke;
    }
    .info-list,
    .course-info-list {
      margin-top: 15px;
      div {
        display: flex;
        align-items: center;
        .left {
          color: #606266;
          font-weight: 500;
          width: 100px;
          text-align-last: justify;
        }
        p {
          font-size: 24px;
          .maohao {
            margin-right: 15px;
            color: #606266;
          }
        }
        .user-info {
          color: $color;
        }
      }
    }
    .course-info {
      .course-info-list {
        div {
          p {
            .maohao {
              margin-right: 15px;
              color: #606266;
            }
            span {
              color: $bg-color;
            }
          }
        }
      }
    }
  }
  .confirm {
    padding: 50px 94px 45px 94px;
    .confirm-btn {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
}
</style>