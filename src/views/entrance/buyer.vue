<template>
  <div class="introduce">
    <div class="bg">
      <v-carousel class="swiper" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </div>
    <div class="main">
      <div class="bd">
        <div class="bd-title">
          <div class="title-img">
            <img src="https://hwt.xesimg.com/teacher/2018/12/19/15452183396925.jpg">
            <p>王*文购买了学习型中国会员</p>
          </div>
          <v-icon></v-icon>
        </div>
        <div class="product-info">
          <p>已成为会员显示底部菜单</p>
        </div>
      </div>
    </div>
    <CommonBottom></CommonBottom>
  </div>
</template>
<script>
import CommonBottom from "@/component/common_bottom";

export default {
  components: {
    CommonBottom
  },

  data() {
    return {
      bottomNav: "recent",
      items: [
        {
          src:
            "https://hw.xesimg.com/ad/2019-01-22/4b49cae69b530d03f34419478c809ecb.png"
        },

        {
          src:
            "https://hwt.xesimg.com/ad/2019-01-03/3d5ac1c6d2ba10ea5faca09b4c26dfb8.jpg"
        },

        {
          src:
            "https://hw.xesimg.com/ad/2019-06-13/1c54dd1e716ac8557e83d30c65a037a1.jpg"
        },

        {
          src:
            "https://hw.xesimg.com/ad/2019-06-03/cd3967caafe596c58093916b1b7c04dc.jpg"
        }
      ]
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
  }

  .main {
    position: relative;
    width: 100%;
    padding: 0 20px;
    margin-top: -76px;

    .bd {
      padding: 10px;
      height: 725px;
      border-radius: 8px;
      background-color: #fff;

      .bd-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 10px;
        font-size: 24px;
        font-weight: 500;
        color: rgb(51, 51, 51);
        border-bottom: 1px solid rgb(241, 240, 240);

        .title-img {
          img {
            margin-right: 10px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            vertical-align: middle;
          }

          p {
            display: inline-block;
            line-height: 38px;
            vertical-align: middle;
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
}
</style>
<style lang="scss">
.swiper {
  height: 420px !important;
  .v-window__container {
    height: 420px !important;
    .v-carousel__item {
      height: 420px !important;
    }
  }
  // .v-image__image--cover {
  //   width: 100%;
  //   background-size: 100% 100% !important;
  // }
}
</style>