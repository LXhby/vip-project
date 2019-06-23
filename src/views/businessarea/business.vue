<template>
  <div class="businiss-info-page">
    <div class="header">
      <v-btn small round class="btn1">所有信息</v-btn>
      <v-btn small round class="btn2">我的信息</v-btn>
      <v-btn small class="btn1 fr">信息发布</v-btn>
    </div>
    <div class="padding-20 businiss-box">
      <user-detail></user-detail>
      <div class="main">
        <page-title title="商机服务"></page-title>
        <div class="content">
          <template v-for="(item ,index) in arr">
            <div class="article-item">
              <div class="item-head">
                <div class="img-avatar">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                  <div class="user">
                    <p>王晓文</p>
                    <span>北京拓客云科技有限公司</span>
                  </div>
                </div>
                <v-btn small round class="delet-btn">删除</v-btn>
              </div>
              <div class="img-list">
                <v-layout row wrap>
                  <v-flex v-for="i in 3" :key="`3${i}`" xs4>
                    <img src="../../assets/timg.jpeg" aspect-ratio="1.7">
                  </v-flex>
                </v-layout>
              </div>

              <p class="show-time">
                <span>1分钟前</span>
                <i class="iconfont icon-gengduo1"></i>
              </p>
              <div class="comment">
                <div class="good">
                  <v-icon>favorite_border</v-icon>
                  <p>
                    <span>王晓文</span>
                    <span>王勇</span>
                    <span>大海</span>
                  </p>
                </div>
                <div class="my-comment">
                  <p>
                    <span class="name maohao">王勇:</span>
                    <span>不错，支持你哦！</span>
                  </p>
                  <p>
                    <span class="name">王晓文</span>
                    <span>回复</span>
                    <span class="name maohao">王勇:</span>
                    <span>专业!</span>
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="bottom-tip">-- 我是有底线的 --</div>
      <div style="height:56px;"></div>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import UserDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
export default {
  components: {
    UserDetail,
    CommonBottom,
    PageTitle
  },
  data() {
    return {
      arr: [1, 2, 3, 4]
    };
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.businiss-info-page {
  .header {
    position: fixed;
    z-index: 3;
    width: 100%;
    top: 0px;
    left: 0px;
    padding: 0 20px;
    background-color: $bg-color;
    .v-btn {
      margin: 15px 0;
      min-width: 120px;
      height: 40px;
      padding: 0px;
      font-size: 24px;
      font-weight: 400;
      background: rgb(255, 205, 158) !important;
    }
    .btn1 {
      color: $bg-color;
    }
    .btn2 {
      margin-left: 32px;
    }
  }
  .businiss-box {
    margin-top: 70px;
  }
  .main {
    .article-item {
      &:nth-child(1) {
        margin-top: 0px;
      }
      &:nth-last-child() {
        border-bottom: 0px solid #fff;
      }
      margin-top: 35px;
      padding-bottom: 35px;
      border-bottom: 1px solid whitesmoke;
      .item-head {
        padding-left: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .img-avatar {
          img {
            width: 60px;
            height: 60px;
            border-radius: 6px;
            vertical-align: middle;
          }
          .user {
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
            p {
              font-size: 28px;
              color: $bg-color;
            }
            span {
              font-size: 24px;
              color: $color;
            }
          }
        }
        .delet-btn {
          height: 40px;
          min-width: 80px !important;
          font-size: 20px;
          padding: 0px;
          color: $bg-color;
          background-color: #fff;
          box-shadow: none;
          font-weight: normal;
          border: 2px solid $bg-color;
        }
      }
      .img-list {
        margin-top: 15px;
        padding: 0 0 0 80px;
        .flex {
          padding-right: 10px;
        }
        img {
          width: 100%;
        }
      }
      .show-time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $text-gray-color;
        margin-left: 80px;
        padding-right: 10px;
      }
      .comment {
        margin: 0 10px 0 80px;
        background-color: rgb(241, 241, 241);
        .good {
          display: flex;
          align-items: center;
          padding: 5px;
          border-bottom: 1px solid rgb(234, 234, 234);
          p {
            span {
              margin: 0 5px;
              color: $bg-color;
            }
          }
        }
        .my-comment {
          padding: 5px 10px 20px;
          p {
            .name {
              color: $bg-color;
            }
            .maohao {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
