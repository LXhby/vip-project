<template>
  <div class="member-detail white--text">
    <div class="hd">
      <v-avatar size="60px" class="inline-boclk">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
      </v-avatar>
      <div class="user-info inline-boclk">
        <p>
          王晓文
          <i>总经理</i>
        </p>
        <span>北京拓客云科技有限公司</span>
      </div>

      <div class="star-cart inline-boclk fr">
        <v-avatar color="indigo" size="34px">
          <v-icon dark>fas fa-star</v-icon>
        </v-avatar>
        <span>我的名片</span>
        <i class="iconfont icon-next"></i>
      </div>
    </div>

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
  border-radius: 8px;
  .hd {
    position: relative;
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
      margin-top: 34px;
      margin-right: -34px;
      border-radius: 27px 0 0 27px;
      background: rgba(255, 255, 255, 0.2);
      .v-avatar {
        opacity: 1;
        .fa-star {
          &:before {
            font-size: 25px;
          }
        }
      }
    }
  }
  .list-num {
    padding: 12px 0;
    margin-top: 60px;
    p {
      margin-top: 8px;
    }
  }
}
</style>
<style lang="scss" >
.list-num {
  text-align: center;
}
</style>
