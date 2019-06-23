<template>
  <div class="introduce">
    <div class="bg">
      <v-carousel class="swiper" hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </div>
    <div class="main">
      <div style="height:calc(100% - 56px);" class="main-box">
        <div class="bd">
          <div class="card">
            <div class="card-title">
              <marquee>
                <marquee-item v-for="(item,index) in list" :key="index">
                  <div class="bd-title">
                    <div class="title-img">
                      <img src="https://hwt.xesimg.com/teacher/2018/12/19/15452183396925.jpg">
                      <p>王*文购买了学习型中国会员</p>
                    </div>
                    <div class="erweima">
                      <i class="iconfont icon-erweima"></i>
                    </div>
                  </div>
                  <!-- </router-link> -->
                </marquee-item>
              </marquee>
            </div>
            <div class="product-info"></div>
          </div>
        </div>
      </div>
    </div>
    <CommonBottom></CommonBottom>
  </div>
</template>
<script>
import CommonBottom from "@/component/common_bottom";
import Marquee from "@/component/marquee/marquee";
import MarqueeItem from "@/component/marquee/marquee-item";
import { getmember_order } from "@/api/index";
export default {
  components: {
    CommonBottom,
    Marquee,
    MarqueeItem
  },

  data() {
    return {
      bottomNav: "recent",
      list: [1, 2, 3, 4],
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
  },
  created() {
    getmember_order().then(res => {
      this.list = res.data;
    });
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
    height: calc(100% - 420px);
    .main-box {
      position: relative;
      padding: 0 20px;
    }
    .bd {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 27px;
      border-radius: 8px;
      background-color: #fff;
      top: -76px;
      .card {
        padding: 0px 10px;
        height: 100%;
        overflow: auto;
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

            p {
              line-height: 76px;
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
        }

        .product-info {
          font-size: 30px;
        }
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