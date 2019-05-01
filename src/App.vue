<template>
  <v-app id="app">
    <!-- <div>
      <AppSpinner/>
    </div>-->
    <AppNavbar/>
    <v-content id="content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/spacing.css";
@import "~bulma/bulma.sass";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content {
  padding: 0 !important;
}
</style>
