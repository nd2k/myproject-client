<template>
  <nav class="navbar has-shadow py-4">
    <v-toolbar flat app color="#fff">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/">
          <span class="font-weight-medium">My</span>
          <span>Project</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/register" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/login" class="button is-light">Log in</router-link>
        </div>
      </div>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-4">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider/>

      <v-list class="px-4" dense>
        <v-list-tile v-for="menu in menus" :key="menu.title">
          <v-list-tile-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menus: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    }
  }
}
</script>

<style>
</style>
