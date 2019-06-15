<template>
  <v-app>
    <router-view v-wechat-title="$store.state.app.title"/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
<style >
@import "//at.alicdn.com/t/font_1244621_lys3own7cz.css";
</style>

