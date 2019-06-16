<template>
  <div class="news-center-page padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="news-list">
        <div class="news-nav">
          <div class="clearfix">
            <h4 class="fl">【系统消息】</h4>
            <span class="fr">2019.08.31 10:23</span>
          </div>
          <p>系统将2019年8月15日20:00至23:00间进行迭代更新，因此系统将无法访问，给大家带来不便，敬请谅解！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
export default {
  components: {
    MemberDetail
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.news-center-page {
  .main {
    .news-list {
      .news-nav {
        h4 {
          margin-left: -12.5px;
          color: $bg-color;
          font-weight: normal;
        }
        span {
          color: #ccc;
          font-size: 21.875px;
        }
        p {
          margin-top: 10px;
        }
        margin-top: 34px;
        padding: 20px 40px;
        border: 1px solid rgb(221, 221, 221);
        font-size: 25px;
        color: rgb(102, 102, 102);
        background: rgb(244, 244, 244);
        border-radius: 8px;
      }
    }
  }
}
</style>