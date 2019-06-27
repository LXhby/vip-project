<template>
  <v-app>
    <router-view v-wechat-title="$store.state.app.title" v-if="isRouterAlive"/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style >
@import "//at.alicdn.com/t/font_1244621_r659ht452y.css";
</style>

