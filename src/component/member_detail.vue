<template>
  <div class="member-detail white--text">
    <v-layout class="hd" align-center>
      <v-avatar size="60px" class="fl">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
      </v-avatar>
      <div class="user-info">
        <p>
          王晓文
          <i>总经理</i>
        </p>
        <span>北京拓客云科技有限公司</span>
      </div>
      <div class="star-cart">
        <v-avatar color="indigo" size="34px">
          <v-icon dark>fas fa-star</v-icon>
        </v-avatar>
        <span>我的名片</span>
        <i class="iconfont icon-next"></i>
      </div>
    </v-layout>
    <v-container grid-list-md text-xs-center>
      <v-layout row class="list-num">
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
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.member-detail {
  font-size: 25px;
  padding: 34px;
  background-color: $bg-color;
  .hd {
    .user-info {
      margin-left: 20px;
      font-size: 28px;
      i {
        font-style: normal;
        font-size: 19px;
      }
      span {
        font-size: 22px;
      }
    }
    .star-cart {
      border-radius: 27px 0 0 27px;
      background: rgba(255, 255, 255, 0.2);
      .v-avatar {
        opacity: 1;
      }
    }
  }
}
</style>
<style lang="scss" >
.list-num {
  text-align: center;
}
</style>
