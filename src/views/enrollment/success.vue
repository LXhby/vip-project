<template>
  <div class="successpage">
    <div class="success-info">
      <div class="head-img">
        <img src>
        <p>微信昵称</p>
      </div>
      <div class="success-content">
        <div class="title">
          <p></p>
          <span>学创会</span>
        </div>
        <div class="content">
          <ul>
            <li>学习，只为创造美好生活！</li>
            <li>打造学习型个人、学习型家庭、学习型企业的创富平台</li>
            <li>我们的信仰：良知、真理、精进、爱</li>
          </ul>
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
@import "../../style/px2rem.scss";
@import "../../style/public.scss";
$designWidth: 750;
.successpage {
  padding: px2rem(30);
  height: 100%;
  background-color: $bg-color;
  text-align: center;

  .success-info {
    padding: 0 px2rem(40) px2rem(60) px2rem(40);
    margin-top: px2rem(100);
    background-color: white;
    border-radius: px2rem(5);

    .head-img {
      position: relative;
      top: px2rem(-30);
      img {
        width: px2rem(60);
        height: px2rem(60);
        border-radius: 50%;
        background-color: grey;
      }
      p {
        font-size: px2rem(30);
      }
    }
    .success-content {
      text-align: left;
      color: grey;

      .title {
        display: flex;
        align-content: center;
        p{
          margin-right: px2rem(10);
          width: px2rem(10);
          height: px2rem(35);
          border-radius: px2rem(5);
          background-color: $bg-color;
        }
        span {
          font-size: px2rem(40);
          font-weight: bold;
        }
      }
      .content {
        margin-top: px2rem(40);
        font-size: px2rem(30);
        font-weight: bold;
      }
      .foot {
        margin-top: px2rem(40);
        font-size: px2rem(40);

        span {
          color: $bg-color;
          font-size: px2rem(60);
        }
      }
    }
  }
  .tip {
    p {
      margin-top: px2rem(30);
      color: #fff;
      font-size: px2rem(30);
    }
  }
}
</style>