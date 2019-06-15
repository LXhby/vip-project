<template>
  <div>
    <div class="course-name">
      <p>某某课程名称</p>
      <div class="course-plan">
        <v-icon>arrow_back_ios</v-icon>
        <ul>
          <li class="course-two">
            <span>第二期</span>
            <p>2019年7月16日</p>
          </li>
          <li class="course-three">
            <span>第三期</span>
            <p>2019年8月15日</p>
          </li>
          <li class="course-one">
            <span>第一期</span>
            <p>2018年12月16日</p>
          </li>
        </ul>
        <v-icon>arrow_forward_ios</v-icon>
      </div>
      <div class="course-info">
        <ul>
          <li>
            <v-icon>access_time</v-icon>
            <span>2019年7月16日至2019年7月19日</span>
          </li>
          <li>
            <v-icon>access_time</v-icon>
            <span>北京·九华山庄宾馆楼</span>
          </li>
          <li>
            <v-icon>supervisor_account</v-icon>
            <span>200人</span>
          </li>
          <li>
            <v-icon>access_time</v-icon>
            <span>
              课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介
              课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介
              课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介
              课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.course-name {
  padding: 20px;
  background-color: #fff;
  font-size: 20px;
  border-radius: 10px;
  p {
    font-size: 25px;
    font-weight: bold;
  }
  .course-plan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      li {
        margin: 0 10px;
        padding: 5px;
        width: 180px;
        border-radius: 5px;
        text-align: center;
        p {
          font-size: 16px;
        }
      }
      .course-two {
        background-color: greenyellow;
      }
      .course-three {
        background-color: yellow;
      }
      .course-one {
        background-color: rgb(208, 212, 212);
      }
    }
  }
  .course-info {
    margin-top: 30px;
    ul {
      li {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid rgb(241, 240, 240);
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>