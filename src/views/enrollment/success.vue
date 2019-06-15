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
@import "@/style/public.scss";

.successpage {
  padding: 30px;
  height: 100%;
  background-color: $bg-color;
  text-align: center;

  .success-info {
    padding: 0 40px 60px 40px;
    margin-top:100px;
    background-color: white;
    border-radius: 5px;

    .head-img {
      position: relative;
      top: -30px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: grey;
      }
      p {
        font-size: 30px;
      }
    }
    .success-content {
      text-align: left;
      color: grey;

      .title {
        display: flex;
        align-content: center;
        p{
          margin-right: 10px;
          width: 10px;
          height: 35px;
          border-radius: 5px;
          background-color: $bg-color;
        }
        span {
          font-size: 40px;
        }
      }
      .content {
        margin-top: 40px;
        font-size: 30px;
      }
      .foot {
        margin-top: 40px;
        font-size: 40px;

        span {
          color: $bg-color;
          font-size: 60px;
        }
      }
    }
  }
  .tip {
    p {
      margin-top: 30px;
      color: #fff;
      font-size: 30px;
    }
  }
}
</style>