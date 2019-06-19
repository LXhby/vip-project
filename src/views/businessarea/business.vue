<template>
  <div>
    <div class="padding-20">
      <user-detail></user-detail>
      <div class="main">
        <div class="title">
          <p></p>
          <span>商机服务</span>
        </div>
        <div class="content">
          <template v-for="(item ,index) in arr">
            <v-list one-line subheader :key="index">
              <v-list-tile class="avater">
                <v-list-tile-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="top-title" v-html="`王晓文`"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="`北京拓客云科技有限公司`"></v-list-tile-sub-title>
                </v-list-tile-content>

                <div class="delete-btn">
                  <v-btn flat color="primary" @click="small" class="delete">删除</v-btn>
                </div>
              </v-list-tile>
              <div class="content-info">
                <v-list>
                  <img>
                </v-list>
                <p class="time">
                  <span>1分钟前</span>
                  <v-icon>more_horiz</v-icon>
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
                  <v-list class="my-comment">
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
                  </v-list>
                </div>
              </div>
            </v-list>
          </template>
        </div>
      </div>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import UserDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
export default {
  components: {
    UserDetail,
    CommonBottom
  },
  data() {
    return {
      arr: [1, 2, 3, 4]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.main {
  .title {
    display: flex;
    align-items: center;
    padding: 30px 0;
    p {
      margin-right: 10px;
      width: 8px;
      height: 30px;
      border-radius: 4px;
      background-color: $bg-color;
    }
    span {
      font-weight: normal;
      font-size: 32px;
      color: $text-gray-color;
    }
  }
  .content {
    .v-list {
      padding: 0;
      .avater {
        .theme--light {
          padding: 0;
          .top-title {
            color: $bg-color;
          }
          .delete-btn {
            .delete {
              width: 100px;
            }
          }
        }
      }
    }
    .content-info {
      padding: 10px 0 10px 100px;
      .v-list {
        img {
          width: 200px;
          height: 300px;
          background-color: gray;
        }
      }
      .time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          color: #999;
        }
      }
      .comment {
        background-color: rgb(230, 230, 230);
        .good {
          display: flex;
          align-items: center;
          padding: 5px;
          border-bottom: 1px solid rgb(206, 206, 206);
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