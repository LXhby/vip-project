<template>
  <div class="head-title">
    <p></p>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.head-title {
  padding: 35px 0;
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
    margin-right: 10px;
    width: 8px;
    height: 30px;
    border-radius: 4px;
    background-color: $bg-color;
  }
  span {
    color: $text-gray-color;
    font-size: 32px;
    line-height: 30px;
  }
}
</style>