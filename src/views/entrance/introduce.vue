<template>
  <div class="introduce">
    <div class="bg">
      <img
        src="http://dfiles.speiyou.com/img/2018/03/02/201547_5a9940732c1ef.jpg"
        alt
        class="hd-bg"
      >
      <div class="bg-info">
        <p class="info-up">
          已有
          <span>3890</span>会员
        </p>
        <p class="info-down">你还在犹豫什么?</p>
      </div>
    </div>
    <div class="main">
      <div class="main-box">
        <div class="bd">
          <div class="card">
            <div class="bd-title">
              <div class="title-img">
                <img src="https://hwt.xesimg.com/teacher/2018/12/19/15452183396925.jpg">
                <p>王*文购买了学习型中国会员</p>
              </div>
              <div class="erweima">
                <i class="iconfont icon-erweima"></i>
              </div>
            </div>
            <div class="product-info"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <v-checkbox v-model="checkbox" label="会员服务条款协议" required color="primary" class="checkbox"></v-checkbox>

      <v-btn color="primary" small depressed class="btn">激活会员</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "recent",
      checkbox: false
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
    position: relative;
    height: 420px;
    background-color: $bg-color;
    text-align: center;
    .hd-bg {
      width: 100%;
      height: 100%;
    }
    .bg-info {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 100px;
      color: #fff;
      font-size: 32px;
      font-weight: 500;
      .info-up {
        line-height: 48px;
        span {
          font-size: 48px;
          color: $bg-huang;
        }
      }
      .info-down {
        font-size: 20px;
        font-weight: 800;
      }
    }
  }
  .main {
    position: relative;
    width: 100%;
    height: calc(100% - 420px);
    .main-box {
      position: relative;
      padding: 0 20px;
      height: calc(100% - 100px);
    }
    .bd {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 27px;
      border-radius: 8px;
      background-color: #fff;
      top: -76px;
      .bd-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 76px;
        font-size: 24px;
        font-weight: 500;
        color: rgb(51, 51, 51);
        border-bottom: 1px solid rgb(241, 240, 240);
        .title-img {
          margin-left: 10px;
          height: 100%;
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
          }
        }
      }
      .erweima {
        // width: 40px;
        // height: 40px;
        font-size: 0px;
        margin-right: 10px;
        padding: 8px 6px 6px 6px;
        border-radius: 6px;
        background-color: rgb(102, 102, 102);
        text-align: center;
        i {
          font-size: 28px;
          line-height: 28px;
          width: 28px;
          height: 28px;
          text-align: center;
          color: #fff;
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
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0px;
    height: 100px;

    background-color: #fff;
  }
}
</style>
<style lang="scss">
.introduce {
  .bottom {
    .checkbox {
      padding: 0px;
      margin-top: 0px;
      .v-input__control {
        height: 100%;
      }
      .v-label {
        color: #333 !important;
      }
      .v-input__slot {
        height: 100px;
        margin-bottom: 0px;
        margin-left: 30px;
        line-height: 100px;
      }
    }
    .btn {
      position: absolute;
      top: 0px;
      bottom: 0px;
      margin: auto 0;
      right: 30px;
      border-radius: 8px;
    }
  }
}
</style>