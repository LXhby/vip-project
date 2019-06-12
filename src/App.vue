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
