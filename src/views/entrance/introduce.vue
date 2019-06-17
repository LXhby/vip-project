<template>
  <div class="introduce">
    <div class="bg">
      <div class="bg-info">
        <p class="info-up">
          已有
          <span>3890</span>会员
        </p>
        <p class="info-down">你还在犹豫什么?</p>
      </div>
    </div>
    <div class="main">
      <div class="bd">
        <div class="bd-title">
          <div class="title-img">
            <p></p>
            <span>王*文购买了学习型中国会员</span>
          </div>
          <v-icon></v-icon>
        </div>
        <div class="product-info">
          <p>学习型中国会员产品详情介绍</p>
        </div>
      </div>
    </div>
    <v-footer fixed>
      <div class="bottom">
        <div class="rules">
        <p></p>
        <span>会员服务条款协议</span>
      </div>
      <v-btn color="primary" small depressed>激活会员</v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.introduce {
  height: 100%;
  background-color: rgb(250, 250, 250);
  .bg {
    height: 420px;
    background-color: $bg-color;
    text-align: center;
    .bg-info {
      padding-top: 200px;
      color: #fff;
      font-size: 30px;
      .info-up {
        span {
          font-size: 50px;
          color: $bg-huang;
        }
      }
      .info-down {
        font-size: 18px;
      }
    }
  }
  .main {
    padding: 0 30px;
    margin-top: -80px;
    .bd {
      padding: 30px 20px;
      height: 850px;
      border-radius: 6px;
      background-color: #fff;
      .bd-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 20px 0;
        border-bottom: 1px solid rgb(241, 240, 240);
        .title-img {
          display: flex;
          align-items: center;
          p {
            margin-right: 14px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: gray;
          }
        }
      }
      .product-info {
        margin-top: 300px;
        text-align: center;
        font-size: 30px;
        color: $bg-color;
      }
    }
  }
  .bottom {
    padding: 10px 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    .rules {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        margin-right: 14px;
        width: 36px;
        height: 36px;
        border: 1px solid gray;
        border-radius: 50%;
      }
      span{
        font-size: 30px;
      }
    }
  }
}
</style>