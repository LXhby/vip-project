<template>
  <div class="successpage">
    <div class="success-info">
      <div class="head-img">
        <img :src="user.headimgurl" v-if="user.headimgurl">
        <p v-if="user.nickname">{{user.nickname}}</p>
      </div>
      <div class="success-content">
        <div class="title">
          <p></p>
          <span>{{membership.name}}</span>
        </div>
        <div class="main">
          <div class="content" v-html="membership.summary"></div>
          <div class="foot">
            <p>
              恭喜你成为{{membership.name}}
              <span>1980</span>
              个会员
              <!-- todoing -->
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tip">
      <p>{{seconds}}秒后跳转至会员实名认证页</p>
    </div>
  </div>
</template>

<script>
import { getMembership } from "@/api/certification";
export default {
  name: "Success",
  data() {
    return {
      id: null,
      user: {},
      membership: {},
      seconds: 5,
      timer: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    console.log("id", this.id);
    getMembership(this.id).then(res => {
      this.user = res.data.user;
      this.membership = res.data.membership;
      this.$store.commit("app/setTitle", "欢迎加入" + this.membership.name);
      this.timer = setInterval(() => {
        this.seconds--;

        if (this.seconds <= 0) {
          clearInterval(this.timer);
          this.$router.push({ name: "Authentication" });
        }
      }, 1000);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.successpage {
  padding: 30px;
  height: 100%;
  background-color: $bg-color;
  text-align: center;

  .success-info {
    padding: 0 37px 37px 37px;
    margin-top: 117px;
    background-color: white;
    border-radius: 5px;

    .head-img {
      position: relative;
      top: -40px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: grey;
      }
      p {
        font-size: 28px;
      }
    }
    .success-content {
      text-align: left;
      color: #666;

      .title {
        display: flex;
        align-content: center;
        padding: 20px 0;
        border-bottom: 1px solid rgb(243, 242, 242);
        p {
          margin-right: 10px;
          width: 8px;
          height: 30px;
          border-radius: 4px;
          background-color: $bg-color;
        }
        span {
          font-size: 32px;
          font-weight: normal;
        }
      }
      .main {
        padding: 20px;
        padding-bottom: 0px;
        .content {
          font-size: 28px;
          p {
            line-height: 42px;
          }
        }
        .foot {
          margin-top: 30px;
          font-size: 32px;
          p {
            display: flex;
            align-items: center;
          }
          span {
            color: $bg-color;
            font-size: 54px;
            font-weight: 400;
            margin: 0 4px;
          }
        }
      }
    }
  }
  .tip {
    p {
      margin-top: 27px;
      color: #fff;
      font-size: 28px;
      font-weight: 500;
    }
  }
}
</style>