<template>
  <div class="common-course-name">
    <div class="course-name">
      <p class="hd-title">
        <span>{{course.name}}</span>
      </p>
      <div class="course-plan">
        <i class="iconfont icon-lunbo" @click="goPush($event,0)"></i>
        <div class="resultContainer">
          <div class="full-box clearfix" ref="fullbox">
            <div class="item-box" ref="courseItem">
              <div class="item two">
                <span>第{{nowCourse.courseIndex}}期</span>
                <p>{{nowCourse.start_date | changeType}}</p>
              </div>
            </div>

            <div class="item-box" v-for="(item,index) in courseList" :key="index">
              <div :class="[item.status=='已结束'?'one':'three','item' ]" @click="goOtherCourse(item)">
                <span>第{{item.courseIndex}}期</span>
                <p>{{item.start_date| changeType }}</p>
              </div>
            </div>
          </div>
        </div>
        <i class="iconfont icon-next1" @click="goPush($event,1)"></i>
      </div>
      <div class="course-info">
        <div class="list">
          <p>
            <i class="iconfont icon-shizhong"></i>
            <span>{{course.start_date | changeType}} 至 {{course.end_date | changeType}}</span>
          </p>
          <p>
            <i class="iconfont icon-dizhi"></i>
            <span>{{course.address}}</span>
          </p>
          <p>
            <i class="iconfont icon-renyuan"></i>
            <span>{{course.max_count}}人</span>
          </p>
          <p class="last">
            <i class="iconfont icon-xueyuan-mulu"></i>
            <span>{{course.summary}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getSameList } from "@/api/course";
export default {
  props: ["course", "bundle_id", "id"],
  data() {
    return {
      courseList: [],
      nowCourse: {},
      saveIndex: "",
      index: 0,
      allLength: ""
    };
  },
  created() {
    this.initData();
  },
  filters: {
    changeType(value) {
      return moment(value).format("YYYY年MM月DD日");
    }
  },
  methods: {
    initData() {
      this.courseList = [];
      this.$refs.fullbox.style.left = "0px";
      getSameList(this.bundle_id).then(res => {
        var arr = res.data.items;
        this.allLength = arr.length;
        console.log("tag", this.allLength);
        arr.forEach((item, index) => {
          this.$set(item, "courseIndex", index + 1);
          if (item.id == this.id) {
            this.nowCourse = item;
            this.saveIndex = index;
          } else {
            this.courseList.push(item);
          }
        });

        console.log("this.nowCours", this.nowCourse);
        console.log("this.courseList", this.courseList);
      });
    },
    goPush(e, index) {
      var getWidth = parseInt(getComputedStyle(this.$refs.courseItem)["width"]);
      if (index) {
        //向左划
        console.log("this,", this.index);
        if (this.index == -(this.allLength - 3)) {
          console.log("this.index", this.index);
          return false;
        }
        this.index = this.index - 1;
        this.$refs.fullbox.style.left = getWidth * this.index + "px";
      } else {
        if (this.index == 0) {
          return false;
        }
        this.index = this.index + 1;

        this.$refs.fullbox.style.left = getWidth * this.index + "px";
      }
    },
    goOtherCourse(item) {
      console.log("item", item);
      if (item.status == "已结束") {
        return false;
      } else {
        this.$router.push({
          name: "Courseinfo",
          params: { id: item.id, bundle_id: item.bundle_id }
        });
        const info = {
          id: item.id,
          bundle_id: item.bundle_id
        };
        this.$emit("handlechange", info);
        this.initData();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.common-course-name {
  .course-name {
    background-color: #fff;
    font-size: 20px;
    border-radius: 10px;
    .hd-title {
      padding: 0 10px;
      font-size: 32px;
      font-weight: 400;
      line-height: 75px;
      color: #333;
      border-bottom: 1px solid rgb(244, 244, 244);
      span {
        margin-left: 10px;
      }
    }
    .course-plan {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 35px;
      .iconfont {
        font-size: 44px;
        color: #ccc;
      }
      .resultContainer {
        overflow: hidden;
        width: 580px;
        color: rgb(10, 6, 6);
        .full-box {
          width: 1000%;
          position: relative;
          left: 0px;
          .item-box {
            float: left;
            width: 200px;
            padding-right: 20px;
          }
        }
        .item {
          width: 180px;

          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;

          height: 60px;
          border-radius: 5px;
          padding: 6px 0;
          color: #fff;
          span {
            font-size: 24px;
            line-height: 24px;
          }
          p {
            font-size: 20px;
          }
        }
        .two {
          background-color: $bg-green;
        }
        .three {
          background-color: $bg-huang;
        }
        .one {
          color: #ccc;
          background-color: $bg-gray;
        }
      }
    }
    .course-info {
      .list {
        padding: 24px;
        p {
          display: flex;
          height: 75px;
          align-items: center;
          border-bottom: 1px solid rgb(245, 245, 245);
          .iconfont {
            font-size: 46px;
            color: #ccc;
            margin-right: 15px;
          }
          span {
            font-size: 26px;
            color: $color;
          }
        }
        .last {
          height: auto;
          padding: 20px 0;
        }
      }
    }
  }
}
</style>
