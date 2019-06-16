<template>
  <div class="user-detail">
    <v-card color="primary" class="white--text border-radius">
      <v-list two-line subheader class="list-bg">
        <v-list-tile avatar>
          <v-list-tile-avatar size="60px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              <p>
                王晓文
                <i>总经理</i>
              </p>
            </v-list-tile-title>
            <v-list-tile-sub-title class="white--text">北京拓客云科技有限公司</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-chip class="star-cart white--text">
              <v-avatar color="indigo" size="34px">
                <v-icon dark>fas fa-star</v-icon>
              </v-avatar>我的名片
              <i class="iconfont icon-next"></i>
            </v-chip>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-layout row class="list-num white--text">
        <v-flex xs4>
          <span>16</span>
          <p>学友</p>
        </v-flex>
        <v-flex xs4>
          <span>16</span>
          <p>上课</p>
        </v-flex>
        <v-flex xs4>
          <span>16</span>
          <p>奖金</p>
        </v-flex>
      </v-layout>
      <div class="bg-weave"></div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
@import "@/style/public.scss";
.user-detail {
  position: relative;
  font-size: 28px;
  .star-cart {
    margin-right: -34px;
    background: rgba(255, 255, 255, 0.2) !important;
    font-size: 28px;
    border-radius: 28px 0 0 28px !important;
    .fa-star {
      &:before {
        font-size: 25px;
      }
    }
    .icon-next {
      margin-left: 8px;
      font-size: 18px;
    }
  }
  .list-num {
    padding: 0px 34px 34px 34px;
    margin-top: 50px;
    text-align: center;
    font-size: 28px;
    p {
      margin-top: 8px;
    }
  }
  .list-bg {
    padding: 28px 0px 0px 0px;
    background: $bg-color !important;
    color: #fff !important;
    .v-list__tile {
      padding: 0 34px;
      .v-list__tile__content {
        margin-left: 20px;
        .v-list__tile__title {
          p {
            font-size: 31px;
            font-weight: 500;
            i {
              font-style: normal;
              font-size: 20px;
            }
          }
        }
        .v-list__tile__sub-title {
          font-size: 25px;
        }
      }
    }
  }
  .bg-weave {
  }
}
</style>