<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="title">
        <p></p>
        <span>确认会议签到</span>
      </div>
      <div class="content">
        <div class="my-info">
          <p class="info-title">个人信息</p>
          <div class="info-list">
            <div>
              <p align="justify" class="left">姓名:</p>
              <p>王晓文</p> 
            </div>
            <div>
              <p class="left">身份证号:</p>
              <p>430412198006085112</p> 
            </div>
            <div>
              <p class="left">手机:</p>
              <p>186 1008 8750</p> 
            </div>
            <div>
              <p class="left">公司名称:</p>
              <p>北京拓客云科技有限公司</p> 
            </div>
            <div>
              <p class="left">职务:</p>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div class="course-info">
          <p class="info-title">课程信息</p>
          <div class="course-info-list">
            <div>
              <p class="left">课程名称:</p>
              <p>第一期企业家演说智慧课程</p>
            </div>
            <div>
              <p class="left">开课时间:</p>
              <p>2019年4月21日-4月23日</p>
            </div>
            <div>
              <p class="left">上课地点:</p>
              <p>北京九华山庄</p>
            </div>
            <div>
              <p class="left">已学次数:</p>
              <p>
                这是您第
                <span>8</span>次学习本课程 总学习
                <span>12</span>次
              </p>
            </div>
            <div>
              <p class="left">推荐人:</p>
              <p><span>王勇</span>未报名/未签到/已签到</p> 
            </div>
          </div>
        </div>
        <div class="confirm">
          <v-btn color="primary" round depressed @click="confirm" large class="confirm-btn">确认签到</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
export default {
  components: {
    MemberDetail
  },
  methods: {
    confirm() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.main {
  .title {
    display: flex;
    align-items: center;
    padding: 35px 5px;
    p {
      margin-right: 14px;
      width: 8px;
      height: 30px;
      border-radius: 4px;
      background-color: $bg-color;
    }
    span {
      color: $text-gray-color;
      font-size: 30px;
    }
  }
  .content {
    padding: 0 30px;
    border: 2px solid $bg-color;
    border-radius: 5px;
    .info-title {
      padding: 30px 0;
      font-size: 30px;
      color: $bg-color;
    }
    .info-list, .course-info-list{
      div {
        display: flex;
        align-items: center;
        .left{
          margin-right: 10px;
          width: 150px;
          text-align-last:justify
        }
      }
    }
    .course-info {
      .course-info-list {
        div{
          p{
            span{
              color: $bg-color;
            }
          }
        }
      }
    }
  }
  .confirm {
    padding: 30px 60px;
    .confirm-btn {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
      font-size: 35px;
    }
  }
}
</style>