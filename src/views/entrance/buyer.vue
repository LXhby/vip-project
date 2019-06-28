<template>
  <div class="introduce">
    <div class="bg">
      <v-carousel class="swiper" hide-delimiters>
        <v-carousel-item v-for="(column,i) in columns" :key="i" :src="column.image"></v-carousel-item>
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
                      <img :src="item.user.headimgurl" v-if="item.user.headimgurl">
                      <p>{{item.member?item.member.realname:item.user.nickname}}购买了{item.membership.name}}</p>
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
import { getmember_order, getAllInfo, getColumn } from "@/api/index";
import { mapGetters } from "vuex";
export default {
  components: {
    CommonBottom,
    Marquee,
    MarqueeItem
  },
  computed: {
    ...mapGetters(["id"])
  },
  data() {
    return {
      bottomNav: "recent",
      list: [],
      columns: []
    };
  },
  created() {
    //进来首页查询用户信息并保存
    getAllInfo(this.id).then(res => {
      this.$store.commit("user/setUserInfo", res.data);
      this.$store.commit("user/setmemberInfo", res.data.member);
    });
    getmember_order()
      .then(res => {
        this.list = res.data.items;
        console.log(this.list)
      })
      .catch(console.log);
    getColumn()
      .then(res => {
        this.columns = res.data.items;
      })
      .catch(console.log);
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