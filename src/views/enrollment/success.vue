<template>
  <div class="successpage">
    <div class="success-info">
      <div class="head-img">
        <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
        <p>微信昵称</p>
      </div>
      <div class="success-content">
        <div class="title">
          <p></p>
          <span>学创会</span>
        </div>
        <div class="main">
          <div class="content">
            <p>学习，只为创造美好生活！</p>
            <p>打造学习型个人、学习型家庭、学习型企业的创富平台</p>
            <p>我们的信仰：良知、真理、精进、爱</p>
          </div>
          <div class="foot">
            <p>
              恭喜你成为学创会第
              <span>1980</span>
              个会员
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tip">
      <p>5秒后跳转至会员实名认证页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {};
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
        font-size: 30px;
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
          font-size: 24px;
          p {
            line-height: 40px;
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
      font-size: 24px;
      font-weight: 500;
    }
  }
}
</style>