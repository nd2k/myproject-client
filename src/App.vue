<template>
  <v-app id="app">
    <!-- <div>
      <AppSpinner/>
    </div>-->
    <AppNavbar/>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
    }
  },
  created() {
    console.log(this.$store)
    console.log(this.$store.state.drawer)
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
</style>
